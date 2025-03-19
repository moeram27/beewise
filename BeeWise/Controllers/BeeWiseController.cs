using Microsoft.AspNetCore.Mvc;

namespace BeeWise.Controllers
{
    public class BeeWiseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult SubCategories()
        {
            return View();
        }

        public IActionResult SurveyPages()
        {
            return View("VerbalQuestions/SurveyPages");
        }

        public IActionResult NonVerbalQuestions()
        {
            return View("NonVerbalQuestions/NonVerbalTests");
        }

        public IActionResult VerbalResults()
        {
            return View("VerbalQuestions/VerbalResults");
        }

        public IActionResult NonVerbalResults()
        {
            return View("NonVerbalQuestions/NonVerbalResults");
        }

        public IActionResult MathTests()
        {
            return View("MathQuestions/MathTests");
        }
    }
}
