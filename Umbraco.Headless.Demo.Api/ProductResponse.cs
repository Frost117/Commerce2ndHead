namespace Umbraco.Headless.Demo.Api
{
    public class ProductResponse
    {
        public int total { get; set; }
        public Item[] items { get; set; }
    }

    public class Item
    {
        public string name { get; set; }
        public DateTime createDate { get; set; }
        public DateTime updateDate { get; set; }
        public Route route { get; set; }
        public string id { get; set; }
        public string contentType { get; set; }
        public Properties properties { get; set; }
        public Cultures cultures { get; set; }
    }

    public class Route
    {
        public string path { get; set; }
        public Startitem startItem { get; set; }
    }

    public class Startitem
    {
        public string id { get; set; }
        public string path { get; set; }
    }

    public class Properties
    {
        public string sku { get; set; }
        public Price price { get; set; }
        public int stock { get; set; }
        public object metaTitle { get; set; }
        public object metaDescription { get; set; }
        public object umbracoUrlName { get; set; }
        public object umbracoUrlAlias { get; set; }
        public bool umbracoNaviHide { get; set; }
        public string shortDescription { get; set; }
        public Longdescription longDescription { get; set; }
        public Image[] images { get; set; }
        public Bgcolor bgColor { get; set; }
        public string[] tags { get; set; }
        public Variants variants { get; set; }
    }

    public class Price
    {
        public Currency currency { get; set; }
        public float withoutTax { get; set; }
        public float tax { get; set; }
        public float withTax { get; set; }
        public Formatted formatted { get; set; }
    }

    public class Currency
    {
        public string type { get; set; }
        public string code { get; set; }
        public string id { get; set; }
    }

    public class Formatted
    {
        public string withoutTax { get; set; }
        public string tax { get; set; }
        public string withTax { get; set; }
    }

    public class Longdescription
    {
        public string markup { get; set; }
    }

    public class Bgcolor
    {
        public string color { get; set; }
        public string label { get; set; }
    }

    public class Variants
    {
        public Attribute[] attributes { get; set; }
        public Item1[] items { get; set; }
        public object priceRange { get; set; }
        public string variantContentUrl { get; set; }
    }

    public class Attribute
    {
        public string alias { get; set; }
        public string name { get; set; }
        public Value[] values { get; set; }
    }

    public class Value
    {
        public string alias { get; set; }
        public string name { get; set; }
    }

    public class Item1
    {
        public object content { get; set; }
        public Attributes attributes { get; set; }
        public bool isDefault { get; set; }
    }

    public class Attributes
    {
        public string size { get; set; }
        public string color { get; set; }
        public string age { get; set; }
    }

    public class Image
    {
        public string id { get; set; }
        public string name { get; set; }
        public string mediaType { get; set; }
        public string url { get; set; }
        public string extension { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public int bytes { get; set; }
        public Properties1 properties { get; set; }
        public object focalPoint { get; set; }
        public object[] crops { get; set; }
    }

    public class Properties1
    {
    }

    public class Cultures
    {
    }

}
