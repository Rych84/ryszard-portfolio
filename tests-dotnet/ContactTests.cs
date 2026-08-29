using System.Threading.Tasks;
using Microsoft.Playwright;
using NUnit.Framework;

namespace PortfolioTests;

[TestFixture]
public class ContactTests : PortfolioTestBase
{
    [Test]
    public async Task ContactSectionIsReachableByScrolling()
    {
        await Page.Locator("#contact").ScrollIntoViewIfNeededAsync();
        await Expect(Page.Locator("#contact")).ToBeInViewportAsync(new() { Ratio = 0.1f });
    }

    [Test]
    public async Task EmailLinkIsPresentAndCorrect()
    {
        await Page.Locator("#contact").ScrollIntoViewIfNeededAsync();
        await Expect(Page.Locator("a[href='mailto:tomaszewski.ryszard@gmail.com']")).ToBeVisibleAsync();
    }
}
