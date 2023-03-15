/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "../data/users.js";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users.map((user) => ({
                name: `${title}. ${user.name}`,
                age: user.age,
                major: user.major
            })));
        }, 3000);
    });
};

// const formatUser = users.map((user) => ({
//     name: `Mr/Mrs. ${user.name}`,
//     age: user.age,
//     major: user.major
// }));
// console.log(formatUser)
// console.log(users)

// formatUser()
//     .then((results) => {
//         console.log(results);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (findAufa) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users.find((user) => user.name == findAufa));
        }, 2000);
    });
};

// const findByName = users.find((user) => user.name == "Aufa");
// console.log(findByName)

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (filterEng) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users.filter((user) => user.major == filterEng));
        }, 4000);
    });
};
// const filterByMajor = users.filter((user) => user.major == "English");
// console.log(filterByMajor)

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export {
    formatUser,
    findByName,
    filterByMajor
};