const formatVolumeIconPath = require('../assets/scripts/main');

test('formatVolumeIconPath > 66', () => {
    expect(formatVolumeIconPath(67)).toMatch('./assets/media/icons/volume-level-3.svg');
});

test('formatVolumeIconPath > 33', () => {
    expect(formatVolumeIconPath(34)).toMatch('./assets/media/icons/volume-level-2.svg');
});

test('formatVolumeIconPath > 0', () => {
    expect(formatVolumeIconPath(1)).toMatch('./assets/media/icons/volume-level-1.svg');
});

test('formatVolumeIconPath 0', () => {
    expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
});