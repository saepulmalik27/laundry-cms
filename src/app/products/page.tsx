"use client";
import Avatar from "@/components/avatar/Avatar";
import Input from "@/components/input/Input";
import RadioChipsGroup from "@/components/radiogroup/RadioChipsGroup";
import Textarea from "@/components/textarea/TextArea";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

interface FormValues {
  name: string;
  description: string;
  sku: string;
  stock: number;
  category_id: number;
  price: number;
}

const categories = [
  { id: 1, name: "Wash and Fold" },
  { id: 2, name: "Dry Clean" },
  { id: 3, name: "Home" },
  { id: 4, name: "Others" },
];

const schema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  sku: Yup.string().required(),
  stock: Yup.number().required().min(1),
  category_id: Yup.number().required(),
  price: Yup.number().required().min(1),
});

const ProductPage: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      description: "",
      sku: "",
      stock: 0,
      category_id: 0,
      price: 0,
    },
    validationSchema: schema,
    onSubmit: async ({ name, description, sku, stock, category_id, price }) => {
      console.log(name, description, sku, stock, category_id, price);
    },
  });

  return (
    <main className="flex-1">
      <div className="bg-white p-7 flex justify-end">
        <Avatar />
      </div>
      <div className="flex flex-row">
        <div className="p-9 flex-1">
          <h1 className="text-[42px] font-bold">Add New Product</h1>
          <Input
            type="text"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
          />

          <Textarea
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : ""
            }
          />

          <div className="grid gap-10 grid-cols-2">
            <Input
              type="text"
              label="SKU"
              name="sku"
              value={formik.values.sku}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.sku && formik.errors.sku ? formik.errors.sku : ""
              }
            />
            <Input
              type="number"
              label="Stock"
              name="stock"
              value={formik.values.stock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.stock && formik.errors.stock
                  ? formik.errors.stock
                  : ""
              }
            />
          </div>

          <RadioChipsGroup
            label="Category"
            name="category_id"
            value={formik.values.category_id}
            options={categories}
            onChange={formik.handleChange}
          />

          <div className="flex justify-between gap-4 items-end">
            <Input
              type="number"
              label="Price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.price && formik.errors.price
                  ? formik.errors.price
                  : ""
              }
            />
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-lightgreen-500 rounded-md hover:bg-lightblue-500"
                onClick={formik.handleSubmit as any}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
