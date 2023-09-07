using System.Net;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Umbraco.Cms.Api.Common.Attributes;

namespace Umbraco.Headless.Demo.Api
{
    [Route("api/v{version:apiVersion}/")]
    [ApiController]
    [ApiVersion("1.0")]
    [MapToApi("products-api-v1")]
    public class ProductsApiController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly ILogger<ProductsApiController> _logger;

        public ProductsApiController(ILogger<ProductsApiController> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        [Route("products")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<string> ProductsAsync(int page = 1, int productsPerPage = 10)
        {

            int skip = (page - 1) * productsPerPage;

            string apiUrl = $"http://localhost:38817/umbraco/delivery/api/v1/content?fetch=descendants:products&skip={skip}&take={productsPerPage}";

            var httpClient = _httpClientFactory.CreateClient();
            // Set up the HTTP client and headers
            httpClient.DefaultRequestHeaders.Clear();
            httpClient.DefaultRequestHeaders.Add("ApiKey", "3vC9B7sesuzXflUgYP3Z1lbGdzeEgDV8");

            // Send the GET request
            var response = await httpClient.GetAsync(apiUrl);
            

            // Check if the request was successful
            if (response.IsSuccessStatusCode)
            {
                // Read the response content
                return response.Content.ReadAsStringAsync().Result;


            }

            else { return null; }
        }
    }
}