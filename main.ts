let L1 = false
let R1 = false
basic.forever(function () {
    L1 = DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1
    R1 = DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1
})
basic.forever(function () {
    if (L1 && R1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    } else if (R1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 90)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
    } else if (L1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 90)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
    }
})
