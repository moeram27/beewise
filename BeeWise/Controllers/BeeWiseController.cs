using Microsoft.AspNetCore.Mvc;

namespace BeeWise.Controllers
{
    public class BeeWiseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
