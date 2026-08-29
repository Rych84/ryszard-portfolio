using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace PortfolioTests;

public abstract class PortfolioTestBase : PageTest
{
    public override BrowserNewContextOptions ContextOptions()
    {
        var options = base.ContextOptions();
        options.BaseURL = TestConfig.BaseUrl;
        return options;
    }

    [SetUp]
    public async Task NavigateToHome()
    {
        await Page.GotoAsync("/");
    }
}
