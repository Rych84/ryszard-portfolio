using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Playwright;
using NUnit.Framework;

namespace PortfolioTests;

[TestFixture]
public class ExperienceTests : PortfolioTestBase
{
    [Test]
    public async Task IndependentConsultantEntryIsVisible()
    {
        await Expect(Page.GetByText("Independent Consultant")).ToBeVisibleAsync();
    }

    [Test]
    public async Task AiToolsAreListedInConsultingSection()
    {
        await Expect(Page.GetByText(new Regex("Claude Code")).First).ToBeVisibleAsync();
        await Expect(Page.GetByText(new Regex("GitHub Copilot")).First).ToBeVisibleAsync();
        await Expect(Page.GetByText(new Regex("ChatGPT")).First).ToBeVisibleAsync();
    }
}
