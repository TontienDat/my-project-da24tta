function addProduct() {
    const New = document.createElement("div");
    New.className = "product-form";

    // Tên sản phẩm
    const Name = document.createElement("input");
    Name.type = "text";
    Name.placeholder = "Tên sản phẩm";

    // Giá
    const Price = document.createElement("input");
    Price.type = "number";
    Price.min = "10000";
    Price.step = "5000";
    Price.placeholder = "Giá";

    // Ngày sản xuất
    const labelNSX = document.createElement("label");
    labelNSX.innerText = "Ngày sản xuất: ";

    const NSX = document.createElement("input");
    NSX.type = "date";

    // Hạn sử dụng
    const labelHSD = document.createElement("label");
    labelHSD.innerText = "Hạn sử dụng: ";

    const HSD = document.createElement("input");
    HSD.type = "date";

    // Gắn vào form
    New.append(Name, Price, labelNSX, NSX, labelHSD, HSD);

    // Hiển thị vào product-list
    document.getElementById("product-list").appendChild(New);
}