// Danh sách sản phẩm
const products = [
    {
        name: "Nước 7up",
        price: "10000 VND / Lon",
        img: "../asset/images/7up.jpg",
        link: "https://vn.images.search.yahoo.com/images/view;_ylt=AwrPoZv52fFpYS0d7e9tUwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzFiMDE3MDc4YmQzMDFiNTdmNTNjY2EwOThhOTI1MWVhBGdwb3MDMjMEaXQDYmluZw--?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D7up%2Blon%26type%3DE210VN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D23&w=1024&h=768&imgurl=cdn.tgdd.vn%2FProducts%2FImages%2F2443%2F312727%2Fbhx%2Fnuoc-ngot-soda-chanh-7-up-lon-320ml-202308160842308679.jpg&rurl=https%3A%2F%2Fwww.bachhoaxanh.com%2Fnuoc-ngot%2Fnuoc-ngot-soda-chanh-7-up-lon-320ml&size=82KB&p=7up+lon&oid=1b017078bd301b57f53cca098a9251ea&fr2=piv-web&fr=mcafee&tt=N%C6%B0%E1%BB%9Bc+ng%E1%BB%8Dt+soda+chanh+7+Up+lon+320ml+t%E1%BA%A1i+B%C3%A1ch+ho%C3%A1+XANH&b=0&ni=21&no=23&ts=&tab=organic&sigr=gUpwLAxaJLIk&sigb=641x699AUFOZ&sigi=edT.6LD17VOL&sigt=xnjbiXkqkDOu&.crumb=8NGSeAO4bYi&fr=mcafee&fr2=piv-web&type=E210VN826G0"
    },
    {
        name: "Trà xanh",
        price: "110000 VND / Hộp",
        img: "../asset/images/traxanh.jpg",
        link: "https://vn.images.search.yahoo.com/images/view;_ylt=AwrKGhur2vFpBZsd4hJtUwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzE1ZThlMzdiODRmMGNkNmQyZjJmOTMxODUzODVhNTBiBGdwb3MDMzcEaXQDYmluZw--?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dtr%25C3%25A0%2Bxanh%26ei%3DUTF-8%26type%3DE210VN826G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D37&w=1080&h=1080&imgurl=goce.vn%2Ffiles%2Fproduct%2Ftra-xanh-2nnjynmy.jpg&rurl=https%3A%2F%2Fgoce.vn%2Ftra-thao-moc%2Ftra-xanh-905&size=692KB&p=tr%C3%A0+xanh&oid=15e8e37b84f0cd6d2f2f93185385a50b&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Tr%C3%A0+Xanh+T%C3%BAi+L%E1%BB%8Dc+Goce&b=0&ni=160&no=37&ts=&tab=organic&sigr=WdJbnEdoD3yg&sigb=Nd9cjFQjFJ4b&sigi=2RKHOXifgMJo&sigt=Ngmd5H9EWa7r&.crumb=8NGSeAO4bYi&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210VN826G0"
    },
    {
        name: "cafe",
        price: "15000 VND / gói",
        img: "../asset/images/cafe.jpg",
        link: "https://vn.images.search.yahoo.com/images/view;_ylt=AwrPoZvA2_FpfSAdGBptUwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzdlOGJlY2E5Yjc0YWIxNzBkN2EwYzgwNjk2NGY5NmI4BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcafe%2Bg%25C3%25B3i%2Btrung%2Bnguy%25C3%25AAn%26ei%3DUTF-8%26type%3DE210VN826G0%26fr%3Dmcafee%26fr2%3Dsa-gp-search%26tab%3Dorganic%26ri%3D1&w=877&h=1024&imgurl=trungnguyencoffe.net%2Fwp-content%2Fuploads%2F2016%2F12%2FEspresso-15goi-877x1024.png&rurl=http%3A%2F%2Ftrungnguyencoffe.net%2Fca-phe-hoa-tan-espresso-15goi%2F&size=301KB&p=cafe+g%C3%B3i+trung+nguy%C3%AAn&oid=7e8beca9b74ab170d7a0c806964f96b8&fr2=sa-gp-search&fr=mcafee&tt=H%C3%B2a+Tan+Espresso+H%E1%BB%99p+15+g%C3%B3i&b=0&ni=160&no=1&ts=&tab=organic&sigr=ib0V1eJqpb0h&sigb=2VkBcWawAK.z&sigi=1I1WBEcr7AUS&sigt=j7mp4T6iCeI2&.crumb=8NGSeAO4bYi&fr=mcafee&fr2=sa-gp-search&type=E210VN826G0"
    }
];

// Hàm tạo sản phẩm
function createProduct(product) {
    // thẻ a bao ngoài
    const link = document.createElement("a");
    link.href = product.link;
    link.target = "_blank";
    link.style.textDecoration = "none";
    link.style.color = "black";

    const div = document.createElement("div");
    div.className = "product-item";

    // hình ảnh
    const divImg = document.createElement("div");
    divImg.className = "product-image";

    const img = document.createElement("img");
    img.src = product.img;

    divImg.appendChild(img);

    // thông tin
    const divInfo = document.createElement("div");
    divInfo.className = "product-info";

    const name = document.createElement("p");
    name.innerText = product.name;

    const price = document.createElement("p");
    price.innerText = product.price;

    const btn = document.createElement("button");
    btn.innerText = "Xem chi tiết";

    // click nút
    btn.onclick = function (e) {
        e.preventDefault(); // tránh lỗi khi nằm trong thẻ <a>
        window.open(product.link, "_blank");
    };

    divInfo.appendChild(name);
    divInfo.appendChild(price);
    divInfo.appendChild(btn);

    div.appendChild(divImg);
    div.appendChild(divInfo);

    link.appendChild(div);

    return link;
}

// hiển thị ra màn hình
const productList = document.getElementById("product-list");

products.forEach(product => {
    const item = createProduct(product);
    productList.appendChild(item);
});