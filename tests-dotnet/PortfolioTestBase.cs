using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace PortfolioTests;

public abstract class PortfolioTestBase : PageTest
{
    protected const string BaseUrl = "http://localhost:3000";

    public override BrowserNewContextOptions ContextOptions()
    {
        return new BrowserNewContextOptions
        {
            BaseURL = BaseUrl,
        };
    }

    [SetUp]
    public async Task NavigateToHome()
    {
        await Page.GotoAsync("/");
    }
}
