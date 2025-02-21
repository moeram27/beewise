using Microsoft.AspNetCore.Mvc;

namespace BeeWise.Controllers
{
    [Route("[controller]")]
    public class ErrorController : Controller
    {
        public IActionResult Index()
        {
            return View("Error");
        }
            //return View("~/Views/Shared/Error.cshtml");

    }
}
