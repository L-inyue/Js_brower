
var Location = function Location() {  //构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Location);


Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
})

/////////////////////////////




location = {};
location.__proto__ = Location.prototype;


location.href = "https://mobile.pinduoduo.com/mall_page.html?mall_id=231784730&msn=zz3p2bqhc7z3xszjqhguqjvirm_axbuy&has_decoration=1&mall_type=0&_x_query=%E7%8F%80%E8%8E%B1%E9%9B%85&refer_page_el_sn=99579&refer_rn=&refer_page_name=search_result&refer_page_id=10015_1641976869000_32ou782lja&refer_page_sn=10015";


for (let prototype_ in Location.prototype) {
    location[prototype_] = Location.prototype[prototype_];

    Location.prototype.__defineGetter__(prototype_, function () {
        debugger;
        throw new TypeError("Illegal constructor");

    });


}

/////////////////////////////


location = catvm.proxy(location);