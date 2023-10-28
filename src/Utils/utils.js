
// TruncateString - truncate desc
export const truncateString = (str, maxLength=40) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    } 
    return str;
}

// ConvertRupiah - converts number into rupiah
export const convertRupiah = (angka)=>{
    if (angka <=0) {
        return 0
    }
    let numberString = angka.toString();
    let split = numberString.split('.');
    let rupiah = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if (split.length > 1) {
        return `Rp. ${rupiah},${split[1]}`;
    }  
    return `Rp. ${rupiah}`;
}

// statusConvertion - converts opennes job
export const statusConvertion = (angka) => {
    if (angka == 1) {
        return "Open"
    }
    return "Closed"
}
