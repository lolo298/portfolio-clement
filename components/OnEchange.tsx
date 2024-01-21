"use client";
function OnEchange() {
  return (
    <a
      onClick={() => {
        const elem = document.getElementById("ContactToggle");
        window?.scrollTo(0, 0);
        elem?.click();
      }}
      className="font-semibold uppercase underline tablet:text-2xl"
    >
      On échange !
    </a>
  );
}

export default OnEchange;
