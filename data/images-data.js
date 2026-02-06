// Images Data for each category
// Lists all images in Office/images/ folders for each category
window.imagesData = {
    basement: [
        '20250703_133256.jpg',
        '20250703_133300.jpg',
        '20250703_133307.jpg',
        '20250703_133310.jpg',
        '20250703_133315.jpg',
        '20250703_133320.jpg',
        '20250703_133324.jpg',
        '20250703_133342.jpg',
        '20250703_133352.jpg',
        '20250711_160437_HDR.jpg',
        '20250715_071407_HDR.jpg',
        '20250807_160812.jpg',
        '20251107_085422.jpg',
        '20260113_115229.jpg',
        '20260114_084607.jpg',
        '20260128_173600.jpg'
    ],
    doors: [
        '20250203_145039.jpg',
        '20250203_145048.jpg',
        '20250203_145101.jpg',
        '20250203_145146_HDR.jpg',
        '20250203_145232_HDR.jpg',
        '20250203_162310_HDR.jpg',
        '20250203_162724.jpg',
        '20250203_162730_HDR.jpg',
        '20250203_164149_HDR.jpg',
        '20250203_164418_HDR.jpg',
        '20250204_173652_HDR.jpg',
        '20250207_152609.jpg',
        '20250207_152613.jpg',
        '20250207_152620.jpg',
        '20250207_152639.jpg',
        '20250207_152642.jpg',
        '20250215_184036_HDR.jpg',
        '20250226_182425_HDR.jpg',
        '20250316_104614.jpg',
        '20250316_104742.jpg',
        '20250324_152556.jpg',
        '20250418_141432_HDR.jpg',
        '20250418_141454_HDR.jpg',
        '20250418_141517_HDR.jpg',
        '20250418_145226.jpg',
        '20250918_172508_HDR.jpg',
        '20250918_172523_HDR.jpg',
        '20250918_172555.jpg',
        '20250918_172614_HDR.jpg',
        '20250918_172624_HDR.jpg',
        '20250926_135249_HDR.jpg',
        '20251126_100803.jpg',
        '20251126_170500.jpg',
        '20260117_065300.jpg',
        '20260117_065307.jpg',
        '20260117_065313.jpg',
        '20260117_075932.jpg',
        '20260130_111912.jpg'
    ],
    steps: [
        '20250203_172921_HDR.jpg',
        '20250219_152015.jpg',
        '20250219_152027.jpg',
        '20250219_152041.jpg',
        '20250219_152050.jpg',
        '20250219_152054.jpg',
        '20250224_180414_HDR.jpg',
        '20250224_180423_HDR.jpg',
        '20250604_114908.jpg',
        '20250702_114015.jpg',
        '20250702_114027.jpg',
        '20250908_152121.jpg',
        '20250910_162636.jpg'
    ],
    water: [
        '20250316_104554.jpg',
        '20250316_104609.jpg',
        '20250503_100241.jpg'
    ],
    windows: [
        '20250207_152539.jpg',
        '20250207_152545_HDR.jpg',
        '20250208_101330.jpg',
        '20250219_151425.jpg',
        '20250226_181919_HDR.jpg',
        '20250417_144458.jpg',
        '20250418_141510_HDR.jpg',
        '20250605_143842.jpg',
        '20250918_173521.jpg',
        '20250918_174629.jpg',
        '20250924_165914.jpg',
        '20250924_171827.jpg',
        '20250924_171845.jpg',
        '20250925_124127.jpg',
        '20250926_101004.jpg',
        '20250926_102035.jpg',
        '20251018_095616.jpg',
        '20260117_081117.jpg',
        '20260128_172706.jpg',
        '20260128_173219.jpg',
        '20260130_111800.jpg',
        '20260130_111824.jpg'
    ]
};

// New: Windows Subcategories Data
window.windowsSubcategories = [
    {
        id: 'w1-standard',
        name: 'Standard Wide Grill Windows (Type A)',
        description: 'Standard wide rectangular grill window',
        folder: 'A-PRIMARY_W1_Standard-Wide-Grill',
        images: ['2.jpeg', '3.jpeg', '4.jpeg', '6.jpeg', '14.jpeg']
    },
    {
        id: 'w2-medium',
        name: 'Medium Wide Grill Windows (Type B)',
        description: 'Medium wide / near-square grill window',
        folder: 'A-PRIMARY_W2_Medium-Wide-Gril',
        images: ['8.jpeg', '10.jpeg', '15.jpeg', '17.jpeg', '18.jpeg']
    },
    {
        id: 'w3-extra',
        name: 'Extra-Wide Grill Windows (Type C)',
        description: 'Extra-wide grill window',
        folder: 'A-PRIMARY_W3_Extra-Wide-Grill',
        images: ['13.jpeg']
    },
    {
        id: 'w4-designer',
        name: 'Feature Designer Grill Windows',
        description: 'Feature window with different designer grill pattern',
        folder: 'A-PRIMARY_W4_Feature-Designer-Grill',
        images: ['1.jpeg']
    },
    {
        id: 'u1-tall',
        name: 'Tall Narrow Ventilator (Bath/Utility)',
        description: 'Tall narrow ventilator window for bathroom or utility spaces',
        folder: 'B-UTILITY_U1_Tall-Narrow-Vent',
        images: ['20.jpeg', '21.jpeg']
    },
    {
        id: 'u2-horizontal',
        name: 'Small Horizontal Ventilator (Toilet/Service)',
        description: 'Small horizontal ventilator for toilet or service areas',
        folder: 'B-UTILITY_U2_Small-Horizontal-Vent',
        images: ['16.jpeg', '19.jpeg']
    },
    {
        id: 'x-exclude',
        name: 'Non-Window Openings (Excluded)',
        description: 'Niches / service openings / not for window ordering',
        folder: 'X-EXCLUDE_NonWindow-Openings',
        images: ['5.jpeg', '7.jpeg', '9.jpeg', '11.jpeg', '12.jpeg']
    }
];
