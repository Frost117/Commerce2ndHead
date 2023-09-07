using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Umbraco.Headless.Demo.Api.Configurations.Swagger
{
    public class ProductsConfigureSwaggerGenOptions : IConfigureOptions<SwaggerGenOptions>
    {
        public void Configure(SwaggerGenOptions options)
        {
            options.SwaggerDoc("products-api-v1", new OpenApiInfo
            {
                Title = "Products configuration",
                Version = "v1",
            });
        }
    }
}
