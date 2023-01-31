// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

/** Example:

Given:
  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

Return:
  [
     { startTime: 0, endTime: 1 },
     { startTime: 3, endTime: 8 },
     { startTime: 9, endTime: 12 },
   ];
 */

/**
 * @param array of objects
 returns array of condensed ranges
 */
const mergeRanges = (arr) => {
  // If we cannot do this in place, create a deep copy
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // sort the array by the meeting start time
  const sortedMeetings = arr.sort((a, b) => a.startTime - b.startTime);
  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];
  // iterated the sorted
  sortedMeetings.forEach((currentMeeting) => {
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    // if the current meeting overlaps with the last merged meeting, use the later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  });

  return mergedMeetings;
};

const times = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

console.log(mergeRanges(times));
