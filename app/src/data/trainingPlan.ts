import type { TrainingBlock } from "../types";

export const trainingPlan: TrainingBlock[] = [
  {
    name: "8K Training",
    raceDate: "2026-05-31",
    raceName: "8K",
    phases: [
      {
        name: "Foundation",
        phaseNumber: 1,
        weeks: [
          {
            weekNumber: 1, startDate: "2026-02-23", isDownWeek: false,
            runs: [
              { id: "w1-r1", type: "easy", description: "20 min: run 2 / walk 1", date: "2026-02-24" },
              { id: "w1-r2", type: "easy", description: "20 min: run 2 / walk 1", date: "2026-02-26" },
              { id: "w1-r3", type: "long", description: "25 min: run 2 / walk 1", date: "2026-02-28" },
            ],
          },
          {
            weekNumber: 2, startDate: "2026-03-02", isDownWeek: false,
            runs: [
              { id: "w2-r1", type: "easy", description: "22 min: run 3 / walk 1", date: "2026-03-03" },
              { id: "w2-r2", type: "easy", description: "22 min: run 3 / walk 1", date: "2026-03-05" },
              { id: "w2-r3", type: "long", description: "28 min: run 3 / walk 1", date: "2026-03-07" },
            ],
          },
          {
            weekNumber: 3, startDate: "2026-03-09", isDownWeek: false,
            runs: [
              { id: "w3-r1", type: "easy", description: "25 min: run 4 / walk 1", date: "2026-03-10" },
              { id: "w3-r2", type: "easy", description: "25 min: run 4 / walk 1", date: "2026-03-12" },
              { id: "w3-r3", type: "long", description: "30 min: run 5 / walk 1", date: "2026-03-14" },
            ],
          },
        ],
      },
      {
        name: "Base Building",
        phaseNumber: 2,
        weeks: [
          {
            weekNumber: 4, startDate: "2026-03-16", isDownWeek: false,
            runs: [
              { id: "w4-r1", type: "easy", description: "2 mi easy", date: "2026-03-17" },
              { id: "w4-r2", type: "easy", description: "2 mi easy", date: "2026-03-19" },
              { id: "w4-r3", type: "long", description: "2.5 mi easy", date: "2026-03-21" },
            ],
          },
          {
            weekNumber: 5, startDate: "2026-03-23", isDownWeek: false,
            runs: [
              { id: "w5-r1", type: "easy", description: "2.5 mi easy", date: "2026-03-24" },
              { id: "w5-r2", type: "easy", description: "2.5 mi easy", date: "2026-03-26" },
              { id: "w5-r3", type: "long", description: "3 mi easy", date: "2026-03-28" },
            ],
          },
          {
            weekNumber: 6, startDate: "2026-03-30", isDownWeek: false,
            runs: [
              { id: "w6-r1", type: "easy", description: "2.5 mi easy", date: "2026-03-31" },
              { id: "w6-r2", type: "easy", description: "2.5 mi easy", date: "2026-04-02" },
              { id: "w6-r3", type: "long", description: "3.5 mi easy", date: "2026-04-04" },
            ],
          },
          {
            weekNumber: 7, startDate: "2026-04-06", isDownWeek: true,
            runs: [
              { id: "w7-r1", type: "easy", description: "2 mi easy", date: "2026-04-07" },
              { id: "w7-r2", type: "easy", description: "2 mi easy", date: "2026-04-09" },
              { id: "w7-r3", type: "long", description: "2.5 mi easy", date: "2026-04-11" },
            ],
          },
          {
            weekNumber: 8, startDate: "2026-04-13", isDownWeek: false,
            runs: [
              { id: "w8-r1", type: "easy", description: "3 mi easy", date: "2026-04-14" },
              { id: "w8-r2", type: "easy", description: "3 mi easy", date: "2026-04-16" },
              { id: "w8-r3", type: "long", description: "4 mi easy", date: "2026-04-18" },
            ],
          },
        ],
      },
      {
        name: "Strength",
        phaseNumber: 3,
        weeks: [
          {
            weekNumber: 9, startDate: "2026-04-20", isDownWeek: false,
            runs: [
              { id: "w9-r1", type: "easy", description: "3 mi easy", date: "2026-04-21" },
              { id: "w9-r2", type: "workout", description: "3 mi w/ 4x2 min tempo", date: "2026-04-23" },
              { id: "w9-r3", type: "long", description: "4.5 mi easy", date: "2026-04-25" },
            ],
          },
          {
            weekNumber: 10, startDate: "2026-04-27", isDownWeek: false,
            runs: [
              { id: "w10-r1", type: "easy", description: "3 mi easy", date: "2026-04-28" },
              { id: "w10-r2", type: "workout", description: "3.5 mi w/ 2x8 min tempo", date: "2026-04-30" },
              { id: "w10-r3", type: "long", description: "5 mi easy", date: "2026-05-02" },
            ],
          },
          {
            weekNumber: 11, startDate: "2026-05-04", isDownWeek: true,
            runs: [
              { id: "w11-r1", type: "easy", description: "2.5 mi easy", date: "2026-05-05" },
              { id: "w11-r2", type: "easy", description: "2.5 mi easy", date: "2026-05-07" },
              { id: "w11-r3", type: "long", description: "3.5 mi easy", date: "2026-05-09" },
            ],
          },
          {
            weekNumber: 12, startDate: "2026-05-11", isDownWeek: false,
            runs: [
              { id: "w12-r1", type: "easy", description: "3 mi easy", date: "2026-05-12" },
              { id: "w12-r2", type: "workout", description: "4 mi w/ 15 min tempo", date: "2026-05-14" },
              { id: "w12-r3", type: "long", description: "5.5 mi easy", date: "2026-05-16" },
            ],
          },
        ],
      },
      {
        name: "Taper",
        phaseNumber: 4,
        weeks: [
          {
            weekNumber: 13, startDate: "2026-05-18", isDownWeek: false,
            runs: [
              { id: "w13-r1", type: "easy", description: "2.5 mi easy", date: "2026-05-19" },
              { id: "w13-r2", type: "workout", description: "3 mi w/ 4x1 min at 8K pace", date: "2026-05-21" },
              { id: "w13-r3", type: "long", description: "3 mi easy", date: "2026-05-23" },
            ],
          },
          {
            weekNumber: 14, startDate: "2026-05-25", isDownWeek: false,
            runs: [
              { id: "w14-r1", type: "easy", description: "2 mi easy", date: "2026-05-26" },
              { id: "w14-r2", type: "workout", description: "2 mi w/ 4x30s strides", date: "2026-05-28" },
              { id: "w14-r3", type: "race", description: "RACE: 8K", date: "2026-05-31" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Half Marathon Training",
    raceDate: "2026-10-03",
    raceName: "Half Marathon",
    phases: [
      {
        name: "Recovery",
        phaseNumber: 5,
        weeks: [
          {
            weekNumber: 15, startDate: "2026-06-01", isDownWeek: false,
            runs: [
              { id: "w15-r1", type: "easy", description: "3 mi easy", date: "2026-06-02" },
              { id: "w15-r2", type: "easy", description: "2 mi easy", date: "2026-06-04" },
              { id: "w15-r3", type: "easy", description: "3 mi easy", date: "2026-06-06" },
            ],
          },
        ],
      },
      {
        name: "Base Expansion",
        phaseNumber: 6,
        weeks: [],
      },
      {
        name: "Half Marathon Specific",
        phaseNumber: 7,
        weeks: [],
      },
      {
        name: "Taper",
        phaseNumber: 8,
        weeks: [],
      },
    ],
  },
];
