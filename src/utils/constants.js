const Constants = {
	Display: {
		Mobile: "mobile",
		Desktop: "desktop"
	},
	Hero: {
		Items: {
			Head: "head",
			Body: "body",
			Foot: "foot"
		}
	},
	Direction: {
		Left: "left",
		Right: "right"
	},
	Image: {
		Sizes: {
			16: 16,
			24: 24,
			32: 32,
			48: 48,
			64: 64,
			96: 96,
			128: 128,
			Square: "square",
			OneByOne: "1by1",
			FiveByFour: "5x4",
			FourByThree: "4by3",
			ThreeByTwo: "3by2",
			FiveByThree: "5by3",
			SixteenByNine: "16by9",
			TwoByOne: "2by1",
			ThreeByOne: "3by1",
			FourByFive: "4by5",
			ThreeByFour: "3by4",
			TwoByThree: "2by3",
			ThreeByFive: "3by5",
			NineBySixteen: "9by16",
			OneByTwo: "1by2",
			OneByThree: "1by3"
		}
	},
	Field: {
		Group: {
			Centered: "centered",
			Right: "right",
			Multiline: "multiline"
		},
		AddOns : {
			Centered: "centered",
			Right: "right"
		}
	},
	Columns: {
		Sizes: {
			ThreeQuarters: (1 << 0).toString(2),
			TwoThirds: (1 << 1).toString(2),
			Half: (1 << 2).toString(2),
			OneThird: (1 << 3).toString(2),
			OneQuarter: (1 << 4).toString(2),
			Full: (1 << 5).toString(2),
			FourFifths: (1 << 6).toString(2),
			ThreeFifths: (1 << 7).toString(2),
			TwoFifths: (1 << 8).toString(2),
			OneFifth: (1 << 9).toString(2)
		},
		Type: {
			Mobile: "mobile",
			Desktop: "desktop",
			Tablet: "tablet",
			WideScreen: "widescreen",
			FullHD: "fullhd",
			Touch: 'touch'
		},
		Modifier: {
			Gapless:"gapless",
			Multiline: "multiline",
			Variable: "variable"
		},
		Options: {
			VCentered: "vcentered",
			Centered: "centered",
			Narrow: "narrow"
		}
	}
};

export default Constants;