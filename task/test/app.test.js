import users from "../src-solution/data/users.js";
import {
  formatUser,
  findByName,
  filterByMajor,
} from "../src-solution/controllers/UserController";

describe("# Menjalankan Test: Array of Object", () => {
  const keys = ["name", "age", "major"];

  test("users harus ada atau sudah diexport", () => {
    const isUsersNotEmpty = Object.keys(users).length > 0;
    expect(isUsersNotEmpty).toBeTruthy();
  });

  test("users harus berupa array of object", () => {
    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
          major: expect.any(String),
        }),
      ])
    );
  });

  test("setiap object harus memiliki property: name, age, dan major", () => {
    users.forEach((user) => {
      keys.forEach((key) => {
        expect(user).toHaveProperty(key);
      });
    });
  });
});

describe("# Menjalankan Test: Function formatUser", () => {
  const keys = ["name", "age", "major"];
  const title = "Mr/Mrs";
  let usersFormatted = [];

  beforeAll(async () => {
    usersFormatted = await formatUser(title);
  });

  test("Fungsi harus bisa format user", () => {});

  test("Fungsi mengembalikan array of object", () => {
    expect(usersFormatted).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
          major: expect.any(String),
        }),
      ])
    );
  });

  test("Property name mengandung kata yang sudah diformat", () => {
    usersFormatted.forEach((user) => {
      const { name } = user;
      expect(name).toContain(title);
    });
  });

  test("Semua object harus memiliki property: name, age, dan major", () => {
    usersFormatted.forEach((user) => {
      keys.forEach((key) => {
        expect(user).toHaveProperty(key);
      });
    });
  });
});

describe("# Menjalankan Test: Function findByName", () => {
  test("Fungsi harus bisa mencari 1 user berdasarkan nama", () => {});

  test("Fungsi mengembalikan 1 data object", () => {});

  test("Object memiliki property: name, age, dan major", () => {});
});

describe("# Menjalankan Test: Function filterByMajor", () => {
  test("Fungsi harus bisa mencari semua semua user berdasarkan major", () => {});

  test("Fungsi mengembalikan array of object", () => {});

  test("Semua object memiliki property: name, age, dan major", () => {});
});
