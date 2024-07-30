import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Stablished = () => {
  return (
    <section className="bg-gray-100 w-full h-[auto]">
      <div className="container-app">
        <div className="flex flex-col sm:flex-row">
          <img
            src="../../../src/assets/images/about.jpg"
            className="sm:w-[50%] w-[100%] h-[600px] object-cover"
          />{" "}
          <div className="mt-12 px-10 sm:w-[50%] w-[100%] h-[600px]">
            <h2 className="text-[42px] font-[600]">Stablished Sinced 2024</h2>
            <p className="text-[20px] text-gray-400 leading-9 w-full text-justify pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, eaque? At suscipit temporibus esse. Sint officiis modi corporis</p><p className="text-[20px] text-gray-400 leading-9 w-full text-justify pt-4"> quos ipsam! Quas unde amet rem sapiente, laborum ullam suscipit ea non aperiam maxime aut eligendi repudiandae possimus iusto asperiores nemo vel quisquam. Porro quos, voluptas tempore voluptates ipsa repellat eum ex tempora cumque? Perferendis provident cumque quaerat eum, modi ducimus dignissimos!</p>
            <button className="w-40 h-14 rounded-xl mt-6 bg-black text-white border-gray-600 hover:bg-[#a09634] flex justify-center items-center uppercase gap-2" type="button">Shop <CiShoppingCart className="text-2xl"/></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stablished;
