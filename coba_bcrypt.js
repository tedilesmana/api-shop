var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync('dilo', salt);

//coba encryp
let hash = nans3u82nduh293h8db292882h89h8;

let cek = bcrypt.compareSync('dilo', hash, (err, hashing) => {
    if (hashing) {
        console.log('berhasil');
    } else {
        console.log('error');
    }
})