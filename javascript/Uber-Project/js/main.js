function calMoney(km, timewait, car) {
    let monneyPerKm, monneyPerTimewait, monneyOnekm;
    switch (car) {
        case "uberX": {
            monneyOnekm = 8000;
            monneyPerKm = 12000;
            monneyPer1Km = 10000;
            monneyPerTimewait = 2000;
            break;
        }
        case "uberSUV": {
            monneyOnekm = 9000;
            monneyPerKm = 14000;
            monneyPer1Km = 12000;
            monneyPerTimewait = 3000;
            break;
        }
        case "uberBlack": {
            monneyOnekm = 10000;
            monneyPerKm = 16000;
            monneyPer1Km = 14000;
            monneyPerTimewait = 4000;
            break;
        }
        default: {
            return false;
        }
    }
    if (km > 0 && km <= 1) return (monneyOnekm + monneyPerTimewait * timewait);
    if (km > 1 && km <= 20) return (monneyOnekm + monneyPerKm * (km - 1) + monneyPerTimewait * timewait);
    if (km > 20) return (monneyOnekm + monneyPerKm * 19 + monneyPer1Km * (km - 20) + monneyPerTimewait * timewait);
    return false;
}
function checkUberType() {
    var uberX = document.getElementById("uberX");
    var uberSUV = document.getElementById("uberSUV");
    var uberBlack = document.getElementById("uberBlack");
    if (uberX.checked) return "uberX";
    if (uberSUV.checked) return "uberSUV";
    if (uberBlack.checked) return "uberBlack";
    return false;
}
function PaidMonney() {
    var uberType = checkUberType();
    var km = document.getElementById("km").value * 1;
    var timewait = document.getElementById("timewait").value * 1;
    var divThanhTien = document.getElementById("divThanhTien");
    var xuatTien = document.getElementById("xuatTien");
    var totalAmount = calMoney(km, timewait, uberType);
    if (totalAmount !== false && uberType !== false) {
        if (km > 0) {
            divThanhTien.style.display = "block";
            xuatTien.innerText = totalAmount.toLocaleString() + ".0 vnđ";
        } else {
            alert("vui lòng nhập số km");
        }
    } else {
        alert("vui lòng chọn loại xe");
    }
}
