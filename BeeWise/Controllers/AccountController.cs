using Microsoft.AspNetCore.Mvc;

namespace BeeWise.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        [HttpGet("login")]
        public IActionResult Login()
        {
            return View();
        }

    }
}
