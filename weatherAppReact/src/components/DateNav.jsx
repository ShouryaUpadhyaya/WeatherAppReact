import DateButton from "./DateButton";
function DateNav() {
  return (
    <div className="w-5/6 h-12 rounded-lg bg-white mt-3 flex items-center justify-evenly">
      <DateButton time="11am" />
      <DateButton time="12am" />
      <DateButton time="1pm" />
      <DateButton time="2pm" />
      <DateButton time="3pm" />
    </div>
  );
}

export default DateNav;
