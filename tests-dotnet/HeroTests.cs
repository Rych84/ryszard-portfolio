using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Playwright;
using NUnit.Framework;

namespace PortfolioTests;

[TestFixture]
public class HeroTests : PortfolioTestBase
{
    [Test]
    public async Task PageHasCorrectTitle()
    {
        var title = await Page.TitleAsync();
        Assert.That(title, Does.Match("Ryszard Tomaszewski"));
    }

    [Test]
    public async Task HeroDisplaysNameAndRoleLabel()
    {
        await Expect(Page.GetByRole(AriaRole.Heading, new() { Level = 1 }))
            .ToContainTextAsync("Ryszard");
        await Expect(Page.GetByText("Senior SDET · QA Automation Lead"))
            .ToBeVisibleAsync();
    }

    [Test]
    public async Task HeroCtaButtonsArePresentAndFunctional()
    {
        await Expect(Page.GetByRole(AriaRole.Button, new() { Name = "View My Work" }))
            .ToBeVisibleAsync();
        await Expect(Page.GetByRole(AriaRole.Link, new() { Name = "Download Resume" }))
            .ToBeVisibleAsync();
        await Expect(
            Page.Locator("#hero").GetByRole(AriaRole.Link, new() { Name = "LinkedIn" })
        ).ToHaveAttributeAsync("href", "https://www.linkedin.com/in/ryszardtomaszewski/");
    }

    [Test]
    public async Task ResumeLinkPointsToPdf()
    {
        var resume = Page.GetByRole(AriaRole.Link, new() { Name = "Download Resume" });
        await Expect(resume).ToHaveAttributeAsync("href", new Regex(@"\.pdf$"));
    }
}
