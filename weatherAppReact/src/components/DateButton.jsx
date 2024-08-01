function DateButton({ time }) {
  return (
    <>
      <button className="ml-2 bg-blue-600 text-white p-2 rounded-md hover:scale-110">
        {time}
      </button>
    </>
  );
}

export default DateButton;
