import React from "react";

export default function Header({ total }) {
  return (
    <div className="w-screen fixed top-0 left-0 z50">
      <p className="text-center text-sm bg-rose-600 p-4 text-white">
        {/* Khi không còn tiền nữa thì sẽ đổi You have money thành You don't have any money left */}
        {/* TODO: đổi kiểu display số  */}
        To spend{" "}
        <span className="text-lg font-bold">
          ${new Intl.NumberFormat("en-US").format(128000000000 - total)}
        </span>{" "}
        You have money
      </p>
    </div>
  );
}
