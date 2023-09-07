using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Headless.Demo.Api.Configurations.Swagger;

namespace Umbraco.Headless.Demo.Api.Extensions.Swagger
{
    public static class ProductsConfigureSwaggerGenUmbracoBuilderExtensions
    {
        public static IUmbracoBuilder ConfigureProductsSwaggerGen(this IUmbracoBuilder builder)
        {
            builder.Services.ConfigureOptions<ProductsConfigureSwaggerGenOptions>();
            return builder;
        }
    }
}
