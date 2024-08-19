import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

// 1 context yapisinin temelini olustur
export const ProductContext = createContext();

// 2 verileri bilesene aktaracak saglayici ve onun tuttugu verileri tanimlama
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  // gosterilecek kategorinin verisi
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    setProducts(null);
    // hangi adrese istek atılacağını belirle
    const url =
      selectedCategory === "all"
        ? "/products" // bütün ürünler
        : `/products/category/${selectedCategory}`; // seçili kategoriye göre alt ürünler
    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  //3 saglayici fonksiyonlari mutlaka provieder i return etmeli ve APP i sarmalamali
  // value olarak eklenen degerler projedeki bilesenler tarafindan erisilebilir olur
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
