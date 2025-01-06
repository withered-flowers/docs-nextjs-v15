---
title: Intermezzo - Server Actions
---

:::note
TL;DR

Server Actions mirip dengan form `action` pada HTML, yang bisa digunakan untuk melakukan mutasi ke backend pada saat menggunakan form.

Namun perbedaannya adalah pada `action` di dalam HTML, kita harus memberikan path dari endpoint yang digunakan di dalam `action`-nya, sedangkan pada Server Actions, yang kita berikan adalah nama dari function yang akan digunakan.
:::

### Hah, action, tapi di server?

Server Actions merupakan sebuah fitur yang ada di dalam NextJS yang bisa digunakan untuk melakukan mutasi ke backend pada saat menggunakan form.

Perbedannya dengan cara React adalah, cara ini kita gunakan layaknya seperti form `action` yang umumnya digunakan pada form HTML, ketimbang menggunakan event `onSubmit` yang ada di dalam React.

### Konvensi Penulisan

- Server Actions ini merupakan sebuah `asynchronous functions`, yang bisa dipanggil di dalam **Server** ATAUPUN **Client** Component.
- Didefinisikan dengan menggunakan `use server`:

  - di dalam baris pertama fungsi

    ```tsx
    // Cara Pertama: Server Action di dalam Server Component / Route Handler
    // File: page.tsx
    const Page = () => {
      // Kalau di sini kita menggunakan form, maka pada saat form di submit,
      // Kita bisa mendapatkan data via FormData
      const formActionHandler = async (formData: FormData) => {
        // Di dalam sini kita akan menggunakan "use server"
        "use server";

        const name = formData.get("name");

        // Mutasi data
        // Revalidasi cache (bila menggunakan cache)
      };

      return (
        <form action={formActionHandler}>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      );
    };

    export default Page;
    ```

  - atauapun di baris pertama dalam file terpisah yang akan dianggap berisi kumpulan `Server Actions`

    ```ts
    // Cara Kedua: Server Action di dalam File Terpisah
    // File: server-actions.ts
    // Perhatikan di sini kita menggunakan "use server" di line pertama
    "use server";

    export const formActionHandler = async (formData: FormData) => {
      const name = formData.get("name");

      // Mutasi data
      // Revalidasi cache (bila menggunakan cache)
    };
    ```

    ```tsx
    // File: page.tsx
    import { formActionHandler } from "./server-actions";

    const Page = () => {
      return (
        <form action={formActionHandler}>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      );
    };

    export default Page;
    ```

:::tip
NextJS menjamin bahwa Server Actions ini, untuk segal logic yang ada di dalamnya, akan dijalankan di server side, sehingga kita tidak perlu khawatir dengan keamanan data yang ada di dalamnya.
:::
