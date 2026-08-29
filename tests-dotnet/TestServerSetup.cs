using System;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using NUnit.Framework;

namespace PortfolioTests;

[SetUpFixture]
public class TestServerSetup
{
    private const string BaseUrl = "http://localhost:3000";
    private static Process? _serverProcess;
    private static bool _startedByUs;

    [OneTimeSetUp]
    public async Task StartServerIfNeeded()
    {
        if (await IsServerUpAsync())
        {
            _startedByUs = false;
            return;
        }

        // TestDirectory is .../tests-dotnet/bin/Debug/<TFM>; the portfolio/
        // project (where `npm run dev` must run) is 4 levels up.
        var portfolioDir = Path.GetFullPath(
            Path.Combine(TestContext.CurrentContext.TestDirectory, "..", "..", "..", ".."));

        _serverProcess = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = "cmd.exe",
                Arguments = "/c npm run dev",
                WorkingDirectory = portfolioDir,
                UseShellExecute = false,
                CreateNoWindow = true,
            }
        };
        _serverProcess.Start();
        _startedByUs = true;

        var deadline = DateTime.UtcNow.AddSeconds(60);
        while (DateTime.UtcNow < deadline)
        {
            if (await IsServerUpAsync())
            {
                return;
            }
            await Task.Delay(500);
        }

        throw new Exception($"Dev server did not respond at {BaseUrl} within 60 seconds.");
    }

    [OneTimeTearDown]
    public void StopServerIfWeStartedIt()
    {
        try
        {
            if (_startedByUs && _serverProcess is not null && !_serverProcess.HasExited)
            {
                KillProcessTree(_serverProcess.Id);
            }
        }
        finally
        {
            _serverProcess?.Dispose();
        }
    }

    private static async Task<bool> IsServerUpAsync()
    {
        try
        {
            using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(2) };
            var response = await client.GetAsync(BaseUrl);
            return response.IsSuccessStatusCode;
        }
        catch
        {
            return false;
        }
    }

    private static void KillProcessTree(int pid)
    {
        try
        {
            if (OperatingSystem.IsWindows())
            {
                using var killer = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        FileName = "taskkill",
                        Arguments = $"/PID {pid} /T /F",
                        UseShellExecute = false,
                        CreateNoWindow = true,
                    }
                };
                killer.Start();
                killer.WaitForExit();
            }
            else
            {
                Process.GetProcessById(pid).Kill(entireProcessTree: true);
            }
        }
        catch
        {
            // Best-effort cleanup — nothing more we can do if this fails.
        }
    }
}
