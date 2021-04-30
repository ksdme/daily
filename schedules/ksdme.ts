import units from '../utils/units'

export default {
  schedule: [
    { starts: units(10, 0),  ends: units(11, 0),  title: 'Wake up' },
    { starts: units(11, 0),  ends: units(11, 30), title: 'Breakfast' },
    { starts: units(11, 30), ends: units(12, 0),  title: 'Work' },
    { starts: units(12, 0),  ends: units(12, 15), title: 'Break' },
    { starts: units(12, 15), ends: units(13, 15), title: 'Work' },
    { starts: units(13, 15), ends: units(13, 30), title: 'Break' },
    { starts: units(13, 30), ends: units(14, 30), title: 'Meeting' },
    { starts: units(14, 30), ends: units(15, 0),  title: 'Lunch' },
    { starts: units(15, 0),  ends: units(16, 0),  title: 'Meeting' },
    { starts: units(16, 0),  ends: units(16, 45), title: 'Break' },
    { starts: units(16, 45), ends: units(18, 0),  title: 'Work' },
    { starts: units(21, 0),  ends: units(21, 30), title: 'Dinner' },
    { starts: units(21, 30), ends: units(22, 30), title: 'Project' },
    { starts: units(22, 30), ends: units(22, 45), title: 'Break' },
    { starts: units(22, 45), ends: units(23, 45), title: 'Project' },
    { starts: units(23, 45), ends: units(0, 0),   title: 'Break' },
    { starts: units(0, 0),   ends: units(1, 0),   title: 'Project' },
    { starts: units(1, 0),   ends: units(1, 30),  title: 'Wind down' },
  ],
  name: 'Kilari Teja',
}
