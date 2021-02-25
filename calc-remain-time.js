// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==

javascript: (function () {
  const zikanhour = document.getElementById("zikanhour");
  const zikanmin = document.getElementById("zikanmin");

  const divisionMs = 1000;
  const divisionSecMinHour = 60;

  const roundUp = {
    hour: 15,
    min: 30
  }

  const dateNow = new Date();
  const dateRoundUp = new Date();
  dateRoundUp.setHours(roundUp.hour);
  dateRoundUp.setMinutes(roundUp.min);

  const diff = dateRoundUp.getTime() - dateNow.getTime();
  const timeRemain = msToTime(diff);

  zikanhour.value = timeRemain.hour;
  zikanmin.value = timeRemain.min;

function msToTime(time) {
  const ms = time % divisionMs;
  time = (time - ms) / divisionMs;
  const seconds = time % divisionSecMinHour;
  time = (time - seconds) / divisionSecMinHour;
  const min = time % divisionSecMinHour;
  const hour = (time - min) / divisionSecMinHour;

  return { hour, min };
}
})();
