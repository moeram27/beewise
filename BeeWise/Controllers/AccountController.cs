using Microsoft.AspNetCore.Mvc;

namespace BeeWise.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }

    }
}
