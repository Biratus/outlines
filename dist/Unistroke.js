/**
 * The $1 Unistroke Recognizer (JavaScript version)
 *
 *	Jacob O. Wobbrock, Ph.D.
 * 	The Information School
 *	University of Washington
 *	Seattle, WA 98195-2840
 *	wobbrock@uw.edu
 *
 *	Andrew D. Wilson, Ph.D.
 *	Microsoft Research
 *	One Microsoft Way
 *	Redmond, WA 98052
 *	awilson@microsoft.com
 *
 *	Yang Li, Ph.D.
 *	Department of Computer Science and Engineering
 * 	University of Washington
 *	Seattle, WA 98195-2840
 * 	yangli@cs.washington.edu
 *
 * The academic publication for the $1 recognizer, and what should be
 * used to cite it, is:
 *
 *	Wobbrock, J.O., Wilson, A.D. and Li, Y. (2007). Gestures without
 *	  libraries, toolkits or training: A $1 recognizer for user interface
 *	  prototypes. Proceedings of the ACM Symposium on User Interface
 *	  Software and Technology (UIST '07). Newport, Rhode Island (October
 *	  7-10, 2007). New York: ACM Press, pp. 159-168.
 *
 * The Protractor enhancement was separately published by Yang Li and programmed
 * here by Jacob O. Wobbrock:
 *
 *	Li, Y. (2010). Protractor: A fast and accurate gesture
 *	  recognizer. Proceedings of the ACM Conference on Human
 *	  Factors in Computing Systems (CHI '10). Atlanta, Georgia
 *	  (April 10-15, 2010). New York: ACM Press, pp. 2169-2172.
 *
 * This software is distributed under the "New BSD License" agreement:
 *
 * Copyright (C) 2007-2012, Jacob O. Wobbrock, Andrew D. Wilson and Yang Li.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    * Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer.
 *    * Redistributions in binary form must reproduce the above copyright
 *      notice, this list of conditions and the following disclaimer in the
 *      documentation and/or other materials provided with the distribution.
 *    * Neither the names of the University of Washington nor Microsoft,
 *      nor the names of its contributors may be used to endorse or promote
 *      products derived from this software without specific prior written
 *      permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Jacob O. Wobbrock OR Andrew D. Wilson
 * OR Yang Li BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
 * OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
**/
(function () {

	var uni = {
		"unistrokes": {
			"triangle": [
				[[191, 204], [191, 206], [191, 208], [187, 215], [185, 219], [179, 231], [178, 235], [173, 253], [169, 264], [166, 269], [164, 274], [162, 276], [159, 282], [159, 285], [156, 292], [155, 294], [155, 295], [157, 295], [160, 295], [161, 295], [166, 295], [168, 295], [176, 296], [180, 296], [185, 296], [191, 296], [194, 296], [204, 296], [206, 296], [212, 296], [214, 296], [219, 296], [221, 296], [228, 298], [232, 298], [235, 299], [239, 299], [241, 299], [242, 299], [242, 298], [241, 296], [240, 294], [240, 291], [238, 287], [237, 285], [234, 280], [233, 276], [228, 269], [228, 265], [224, 259], [222, 256], [218, 249], [216, 244], [213, 239], [211, 236], [210, 232], [208, 228], [207, 227], [204, 222], [202, 219], [200, 219], [200, 218], [200, 217], [199, 217], [198, 216], [197, 215], [196, 212], [193, 207], [192, 204], [191, 203], [191, 202]],
				[[253, 182], [252, 184], [251, 186], [251, 190], [248, 196], [245, 201], [241, 217], [231, 242], [227, 249], [216, 274], [214, 282], [210, 292], [209, 294], [209, 295], [210, 295], [212, 295], [215, 295], [219, 295], [230, 295], [251, 295], [261, 295], [275, 294], [285, 294], [296, 294], [299, 294], [302, 294], [307, 292], [308, 292], [309, 292], [309, 291], [309, 290], [309, 289], [307, 286], [305, 278], [303, 276], [296, 264], [290, 255], [287, 247], [281, 238], [276, 230], [270, 218], [267, 209], [261, 198], [260, 197], [258, 191], [256, 189], [252, 183], [250, 179], [249, 179], [249, 178]]
			],
			"square": [
				[[0, 0], [0, 100], [100, 100], [100, 0], [0, 0]],
				[[50, 50], [49, 102], [101, 100], [102, 49], [51, 48]]
			],
			"rectangle": [
				[[132, 159], [132, 162], [132, 163], [132, 170], [132, 174], [132, 176], [130, 179], [130, 185], [130, 188], [129, 194], [129, 195], [129, 198], [129, 199], [129, 200], [128, 203], [128, 204], [130, 204], [133, 204], [140, 204], [144, 204], [155, 204], [167, 204], [172, 204], [180, 204], [183, 205], [197, 206], [199, 206], [206, 205], [208, 205], [215, 205], [223, 204], [226, 204], [231, 204], [232, 204], [235, 203], [236, 203], [237, 202], [237, 201], [237, 200], [238, 196], [239, 193], [240, 186], [240, 185], [241, 179], [241, 176], [241, 175], [241, 170], [241, 168], [242, 164], [242, 163], [242, 159], [243, 157], [243, 155], [243, 153], [243, 151], [243, 150], [243, 149], [242, 149], [241, 149], [240, 149], [235, 149], [232, 149], [226, 149], [223, 149], [217, 150], [213, 150], [203, 151], [199, 151], [194, 151], [191, 152], [184, 152], [178, 152], [174, 152], [170, 152], [168, 152], [163, 152], [157, 152], [154, 152], [150, 152], [149, 152], [146, 152], [145, 152], [144, 152], [143, 152]],
				[[165, 296], [165, 298], [165, 299], [165, 300], [165, 304], [165, 310], [165, 314], [165, 321], [165, 323], [165, 335], [165, 339], [165, 348], [165, 354], [165, 356], [164, 360], [164, 363], [164, 362], [165, 362], [166, 362], [168, 361], [170, 360], [174, 360], [178, 360], [181, 359], [185, 357], [189, 357], [197, 357], [200, 357], [206, 357], [212, 356], [218, 356], [223, 356], [227, 356], [233, 356], [236, 355], [246, 354], [249, 354], [256, 354], [259, 354], [263, 355], [273, 356], [278, 359], [284, 359], [287, 359], [291, 361], [293, 361], [297, 362], [300, 362], [302, 363], [302, 362], [302, 361], [302, 359], [302, 358], [302, 354], [302, 351], [302, 349], [302, 346], [302, 345], [302, 341], [302, 339], [302, 332], [302, 330], [302, 326], [302, 324], [302, 322], [302, 319], [301, 317], [301, 313], [301, 311], [301, 309], [300, 307], [300, 305], [300, 304], [300, 303], [300, 302], [299, 302], [298, 302], [297, 301], [296, 301], [295, 301], [291, 301], [288, 301], [280, 301], [276, 301], [268, 301], [256, 301], [252, 301], [242, 302], [239, 303], [225, 303], [221, 303], [213, 303], [208, 303], [203, 303], [196, 303], [193, 303], [187, 303], [186, 303], [184, 303], [182, 303], [181, 303], [179, 303], [178, 303], [175, 303], [174, 303], [173, 303], [172, 303]]
			],
			"x": [
				[[288, 95], [289, 96], [299, 104], [309, 113], [320, 128], [325, 134], [330, 141], [335, 145], [336, 145], [338, 145], [338, 143], [339, 142], [340, 138], [341, 128], [341, 121], [343, 111], [344, 99], [345, 83], [345, 78], [345, 72], [345, 71], [345, 72], [345, 75], [344, 77], [340, 84], [332, 93], [322, 107], [310, 115], [308, 122], [298, 128], [292, 135], [285, 141], [283, 143], [281, 146], [280, 148]],
				[[234, 121], [234, 122], [235, 124], [238, 128], [247, 141], [251, 146], [260, 159], [265, 165], [274, 179], [280, 184], [282, 186], [288, 190], [289, 190], [290, 190], [290, 189], [290, 187], [291, 184], [294, 178], [294, 166], [296, 157], [296, 149], [300, 136], [300, 133], [300, 126], [300, 124], [300, 122], [300, 121], [299, 123], [296, 125], [293, 127], [288, 132], [285, 136], [273, 147], [255, 160], [247, 166], [236, 179], [231, 183], [228, 190], [227, 190], [225, 193]]
			],
			"circle": [
				[[206, 304], [204, 305], [202, 306], [201, 308], [199, 315], [197, 322], [195, 335], [194, 341], [194, 349], [194, 356], [194, 359], [197, 361], [197, 363], [203, 368], [208, 369], [211, 370], [218, 370], [220, 371], [227, 371], [232, 371], [241, 369], [247, 366], [253, 359], [254, 357], [258, 351], [265, 343], [266, 341], [267, 339], [267, 337], [267, 335], [267, 332], [266, 328], [262, 321], [262, 318], [259, 314], [256, 312], [250, 311], [248, 308], [242, 307], [237, 305], [235, 305], [230, 304], [226, 304], [217, 305], [214, 305], [211, 307], [210, 308], [210, 309]],
				[[272, 130], [268, 134], [264, 140], [263, 144], [258, 152], [255, 159], [254, 162], [254, 168], [254, 172], [258, 182], [258, 189], [261, 193], [268, 199], [271, 200], [282, 204], [286, 204], [297, 204], [300, 204], [307, 204], [313, 204], [318, 200], [321, 200], [323, 198], [325, 195], [326, 193], [328, 186], [328, 184], [329, 178], [329, 175], [329, 170], [329, 167], [329, 165], [328, 161], [326, 157], [326, 151], [324, 149], [322, 147], [317, 142], [316, 140], [315, 139], [312, 137], [308, 135], [306, 134], [300, 133], [298, 132], [290, 130], [287, 130], [282, 128], [279, 128], [278, 128], [277, 130], [277, 131], [277, 132]]
			],
			"v": [
				[[232, 352], [238, 361], [242, 368], [246, 380], [250, 384], [252, 391], [253, 393], [254, 397], [255, 397], [255, 396], [255, 395], [256, 393], [257, 389], [259, 383], [261, 378], [263, 372], [264, 370], [266, 364], [266, 362], [268, 359], [268, 357], [270, 355], [270, 353], [271, 352], [271, 351], [272, 350], [272, 347], [273, 347], [273, 346]],
				[[190, 102], [195, 112], [211, 145], [223, 175], [228, 187], [231, 196], [234, 199], [236, 199], [236, 197], [237, 196], [239, 193], [244, 181], [246, 177], [250, 166], [253, 163], [259, 150], [260, 144], [264, 131], [268, 125], [274, 116], [276, 101], [280, 97], [283, 88], [283, 87]]
			],
			"zigzag": [
				[[180, 369], [180, 367], [180, 365], [186, 343], [189, 336], [197, 320], [199, 312], [205, 299], [208, 292], [209, 292], [211, 291], [211, 290], [212, 291], [213, 292], [215, 294], [222, 300], [227, 308], [250, 331], [257, 350], [267, 371], [272, 373], [280, 380], [283, 383], [284, 384], [285, 385], [285, 384], [286, 384], [286, 382], [288, 374], [292, 359], [294, 353], [298, 342], [300, 330], [305, 318], [306, 315], [309, 307], [313, 301], [314, 298], [315, 295], [316, 295], [316, 293], [316, 292], [317, 292]],
				[[168, 212], [168, 211], [168, 209], [168, 208], [168, 207], [169, 204], [170, 201], [172, 196], [173, 190], [174, 188], [177, 181], [178, 180], [179, 176], [181, 174], [182, 171], [183, 169], [185, 169], [188, 162], [190, 160], [190, 159], [191, 159], [192, 159], [193, 159], [194, 159], [195, 160], [197, 162], [199, 164], [203, 168], [205, 170], [207, 172], [209, 174], [211, 177], [215, 181], [216, 183], [218, 187], [221, 189], [227, 196], [229, 198], [235, 203], [236, 205], [239, 207], [241, 207], [241, 209], [243, 210], [244, 210], [245, 210], [246, 210], [248, 207], [249, 205], [250, 201], [251, 199], [256, 191], [257, 188], [259, 182], [260, 179], [261, 175], [262, 173], [265, 168], [266, 165], [266, 163], [268, 158], [269, 156], [272, 152], [273, 151], [273, 150], [274, 149], [275, 148]]
			]
		}
	};
	//
	// Point class
	//
	function Point(x, y) // constructor
	{
		if (this.constructor !== Point) { return new Point(x, y); }
		this.X = x;
		this.Y = y;
	}
	//
	// Rectangle class
	//
	function Rectangle(x, y, width, height) // constructor
	{
		this.X = x;
		this.Y = y;
		this.Width = width;
		this.Height = height;
	}
	//
	// Unistroke class: a unistroke template
	//
	function Unistroke(name, points) // constructor
	{
		this.Name = name;
		this.Points = Resample(points, NumPoints);
		var radians = IndicativeAngle(this.Points);
		this.Points = RotateBy(this.Points, -radians);
		this.Points = ScaleTo(this.Points, SquareSize);
		this.Points = TranslateTo(this.Points, Origin);
		this.Vector = Vectorize(this.Points); // for Protractor
	}
	//
	// Result class
	//
	function Result(name, score) // constructor
	{
		this.Name = name;
		this.Score = score;
	}
	//
	// DollarRecognizer class constants
	//
	var NumUnistrokes = 17;
	var NumPoints = 64;
	var SquareSize = 250.0;
	var Origin = new Point(0, 0);
	var Diagonal = Math.sqrt(SquareSize * SquareSize + SquareSize * SquareSize);
	var HalfDiagonal = 0.5 * Diagonal;
	var AngleRange = Deg2Rad(45.0);
	var AnglePrecision = Deg2Rad(2.0);
	var Phi = 0.5 * (-1.0 + Math.sqrt(5.0)); // Golden Ratio
	//
	// DollarRecognizer class
	//
	function DollarRecognizer() // constructor
	{
		//
		// one built-in unistroke per gesture type
		//
		this.Unistrokes = [];
		// this.Unistrokes[0] = new Unistroke("triangle", new Array(new Point(137,139),new Point(135,141),new Point(133,144),new Point(132,146),new Point(130,149),new Point(128,151),new Point(126,155),new Point(123,160),new Point(120,166),new Point(116,171),new Point(112,177),new Point(107,183),new Point(102,188),new Point(100,191),new Point(95,195),new Point(90,199),new Point(86,203),new Point(82,206),new Point(80,209),new Point(75,213),new Point(73,213),new Point(70,216),new Point(67,219),new Point(64,221),new Point(61,223),new Point(60,225),new Point(62,226),new Point(65,225),new Point(67,226),new Point(74,226),new Point(77,227),new Point(85,229),new Point(91,230),new Point(99,231),new Point(108,232),new Point(116,233),new Point(125,233),new Point(134,234),new Point(145,233),new Point(153,232),new Point(160,233),new Point(170,234),new Point(177,235),new Point(179,236),new Point(186,237),new Point(193,238),new Point(198,239),new Point(200,237),new Point(202,239),new Point(204,238),new Point(206,234),new Point(205,230),new Point(202,222),new Point(197,216),new Point(192,207),new Point(186,198),new Point(179,189),new Point(174,183),new Point(170,178),new Point(164,171),new Point(161,168),new Point(154,160),new Point(148,155),new Point(143,150),new Point(138,148),new Point(136,148)));
		// this.Unistrokes[1] = new Unistroke("x", new Array(new Point(87,142),new Point(89,145),new Point(91,148),new Point(93,151),new Point(96,155),new Point(98,157),new Point(100,160),new Point(102,162),new Point(106,167),new Point(108,169),new Point(110,171),new Point(115,177),new Point(119,183),new Point(123,189),new Point(127,193),new Point(129,196),new Point(133,200),new Point(137,206),new Point(140,209),new Point(143,212),new Point(146,215),new Point(151,220),new Point(153,222),new Point(155,223),new Point(157,225),new Point(158,223),new Point(157,218),new Point(155,211),new Point(154,208),new Point(152,200),new Point(150,189),new Point(148,179),new Point(147,170),new Point(147,158),new Point(147,148),new Point(147,141),new Point(147,136),new Point(144,135),new Point(142,137),new Point(140,139),new Point(135,145),new Point(131,152),new Point(124,163),new Point(116,177),new Point(108,191),new Point(100,206),new Point(94,217),new Point(91,222),new Point(89,225),new Point(87,226),new Point(87,224)));

		/*var square = [Point(0, 0), Point(10, 0), Point(10, 10), Point(0, 10), Point(0, 0)];
		this.Unistrokes.push(new Unistroke("square", square.slice()));
		this.Unistrokes.push(new Unistroke("square", square.slice().reverse()));
	
		var rectangleTall = [Point(0, 0), Point(10, 0), Point(10, 30), Point(0, 30), Point(0, 0)];
		this.Unistrokes.push(new Unistroke("rectangle", rectangleTall.slice()));
		this.Unistrokes.push(new Unistroke("rectangle", rectangleTall.slice().reverse()));
	
		var rectangleWide = [Point(0, 0), Point(30, 0), Point(30, 10), Point(0, 10), Point(0, 0)];
		this.Unistrokes.push(new Unistroke("rectangle", rectangleWide.slice()));
		this.Unistrokes.push(new Unistroke("rectangle", rectangleWide.slice().reverse()));
	
		var circle = new Array(new Point(127, 141), new Point(124, 140), new Point(120, 139), new Point(118, 139), new Point(116, 139), new Point(111, 140), new Point(109, 141), new Point(104, 144), new Point(100, 147), new Point(96, 152), new Point(93, 157), new Point(90, 163), new Point(87, 169), new Point(85, 175), new Point(83, 181), new Point(82, 190), new Point(82, 195), new Point(83, 200), new Point(84, 205), new Point(88, 213), new Point(91, 216), new Point(96, 219), new Point(103, 222), new Point(108, 224), new Point(111, 224), new Point(120, 224), new Point(133, 223), new Point(142, 222), new Point(152, 218), new Point(160, 214), new Point(167, 210), new Point(173, 204), new Point(178, 198), new Point(179, 196), new Point(182, 188), new Point(182, 177), new Point(178, 167), new Point(170, 150), new Point(163, 138), new Point(152, 130), new Point(143, 129), new Point(140, 131), new Point(129, 136), new Point(126, 139));
	
		this.Unistrokes.push(new Unistroke("circle", circle.slice()));
		this.Unistrokes.push(new Unistroke("circle", circle.slice().reverse()));*/

		uni = uni.unistrokes;
		for (var type in uni) {
			if (uni.hasOwnProperty(type)) {
				var arr = [], obj;
				for (var i in uni[type][0]) {
					obj = uni[type][0][i];
					arr.push(new Point(obj[0], obj[1]));
				}
				this.Unistrokes.push(new Unistroke(type, arr));
				this.Unistrokes.push(new Unistroke(type, arr.slice().reverse()));
				arr = [];
				for (var i in uni[type][1]) {
					obj = uni[type][1][i];
					arr.push(new Point(obj[0], obj[1]));
				}
				this.Unistrokes.push(new Unistroke(type, arr));
				this.Unistrokes.push(new Unistroke(type, arr.slice().reverse()));
			}
		}

		// this.Unistrokes.push( new Unistroke("check", new Array(new Point(91,185),new Point(93,185),new Point(95,185),new Point(97,185),new Point(100,188),new Point(102,189),new Point(104,190),new Point(106,193),new Point(108,195),new Point(110,198),new Point(112,201),new Point(114,204),new Point(115,207),new Point(117,210),new Point(118,212),new Point(120,214),new Point(121,217),new Point(122,219),new Point(123,222),new Point(124,224),new Point(126,226),new Point(127,229),new Point(129,231),new Point(130,233),new Point(129,231),new Point(129,228),new Point(129,226),new Point(129,224),new Point(129,221),new Point(129,218),new Point(129,212),new Point(129,208),new Point(130,198),new Point(132,189),new Point(134,182),new Point(137,173),new Point(143,164),new Point(147,157),new Point(151,151),new Point(155,144),new Point(161,137),new Point(165,131),new Point(171,122),new Point(174,118),new Point(176,114),new Point(177,112),new Point(177,114),new Point(175,116),new Point(173,118))) );
		// this.Unistrokes[5] = new Unistroke("caret", new Array(new Point(79,245),new Point(79,242),new Point(79,239),new Point(80,237),new Point(80,234),new Point(81,232),new Point(82,230),new Point(84,224),new Point(86,220),new Point(86,218),new Point(87,216),new Point(88,213),new Point(90,207),new Point(91,202),new Point(92,200),new Point(93,194),new Point(94,192),new Point(96,189),new Point(97,186),new Point(100,179),new Point(102,173),new Point(105,165),new Point(107,160),new Point(109,158),new Point(112,151),new Point(115,144),new Point(117,139),new Point(119,136),new Point(119,134),new Point(120,132),new Point(121,129),new Point(122,127),new Point(124,125),new Point(126,124),new Point(129,125),new Point(131,127),new Point(132,130),new Point(136,139),new Point(141,154),new Point(145,166),new Point(151,182),new Point(156,193),new Point(157,196),new Point(161,209),new Point(162,211),new Point(167,223),new Point(169,229),new Point(170,231),new Point(173,237),new Point(176,242),new Point(177,244),new Point(179,250),new Point(181,255),new Point(182,257)));
		// this.Unistrokes[6] = new Unistroke("zig-zag", new Array(new Point(307,216),new Point(333,186),new Point(356,215),new Point(375,186),new Point(399,216),new Point(418,186)));
		// this.Unistrokes[7] = new Unistroke("arrow", new Array(new Point(68,222),new Point(70,220),new Point(73,218),new Point(75,217),new Point(77,215),new Point(80,213),new Point(82,212),new Point(84,210),new Point(87,209),new Point(89,208),new Point(92,206),new Point(95,204),new Point(101,201),new Point(106,198),new Point(112,194),new Point(118,191),new Point(124,187),new Point(127,186),new Point(132,183),new Point(138,181),new Point(141,180),new Point(146,178),new Point(154,173),new Point(159,171),new Point(161,170),new Point(166,167),new Point(168,167),new Point(171,166),new Point(174,164),new Point(177,162),new Point(180,160),new Point(182,158),new Point(183,156),new Point(181,154),new Point(178,153),new Point(171,153),new Point(164,153),new Point(160,153),new Point(150,154),new Point(147,155),new Point(141,157),new Point(137,158),new Point(135,158),new Point(137,158),new Point(140,157),new Point(143,156),new Point(151,154),new Point(160,152),new Point(170,149),new Point(179,147),new Point(185,145),new Point(192,144),new Point(196,144),new Point(198,144),new Point(200,144),new Point(201,147),new Point(199,149),new Point(194,157),new Point(191,160),new Point(186,167),new Point(180,176),new Point(177,179),new Point(171,187),new Point(169,189),new Point(165,194),new Point(164,196)));
		// this.Unistrokes[8] = new Unistroke("left square bracket", new Array(new Point(140,124),new Point(138,123),new Point(135,122),new Point(133,123),new Point(130,123),new Point(128,124),new Point(125,125),new Point(122,124),new Point(120,124),new Point(118,124),new Point(116,125),new Point(113,125),new Point(111,125),new Point(108,124),new Point(106,125),new Point(104,125),new Point(102,124),new Point(100,123),new Point(98,123),new Point(95,124),new Point(93,123),new Point(90,124),new Point(88,124),new Point(85,125),new Point(83,126),new Point(81,127),new Point(81,129),new Point(82,131),new Point(82,134),new Point(83,138),new Point(84,141),new Point(84,144),new Point(85,148),new Point(85,151),new Point(86,156),new Point(86,160),new Point(86,164),new Point(86,168),new Point(87,171),new Point(87,175),new Point(87,179),new Point(87,182),new Point(87,186),new Point(88,188),new Point(88,195),new Point(88,198),new Point(88,201),new Point(88,207),new Point(89,211),new Point(89,213),new Point(89,217),new Point(89,222),new Point(88,225),new Point(88,229),new Point(88,231),new Point(88,233),new Point(88,235),new Point(89,237),new Point(89,240),new Point(89,242),new Point(91,241),new Point(94,241),new Point(96,240),new Point(98,239),new Point(105,240),new Point(109,240),new Point(113,239),new Point(116,240),new Point(121,239),new Point(130,240),new Point(136,237),new Point(139,237),new Point(144,238),new Point(151,237),new Point(157,236),new Point(159,237)));
		// this.Unistrokes[9] = new Unistroke("right square bracket", new Array(new Point(112,138),new Point(112,136),new Point(115,136),new Point(118,137),new Point(120,136),new Point(123,136),new Point(125,136),new Point(128,136),new Point(131,136),new Point(134,135),new Point(137,135),new Point(140,134),new Point(143,133),new Point(145,132),new Point(147,132),new Point(149,132),new Point(152,132),new Point(153,134),new Point(154,137),new Point(155,141),new Point(156,144),new Point(157,152),new Point(158,161),new Point(160,170),new Point(162,182),new Point(164,192),new Point(166,200),new Point(167,209),new Point(168,214),new Point(168,216),new Point(169,221),new Point(169,223),new Point(169,228),new Point(169,231),new Point(166,233),new Point(164,234),new Point(161,235),new Point(155,236),new Point(147,235),new Point(140,233),new Point(131,233),new Point(124,233),new Point(117,235),new Point(114,238),new Point(112,238)));
		// this.Unistrokes[10] = new Unistroke("v", new Array(new Point(89,164),new Point(90,162),new Point(92,162),new Point(94,164),new Point(95,166),new Point(96,169),new Point(97,171),new Point(99,175),new Point(101,178),new Point(103,182),new Point(106,189),new Point(108,194),new Point(111,199),new Point(114,204),new Point(117,209),new Point(119,214),new Point(122,218),new Point(124,222),new Point(126,225),new Point(128,228),new Point(130,229),new Point(133,233),new Point(134,236),new Point(136,239),new Point(138,240),new Point(139,242),new Point(140,244),new Point(142,242),new Point(142,240),new Point(142,237),new Point(143,235),new Point(143,233),new Point(145,229),new Point(146,226),new Point(148,217),new Point(149,208),new Point(149,205),new Point(151,196),new Point(151,193),new Point(153,182),new Point(155,172),new Point(157,165),new Point(159,160),new Point(162,155),new Point(164,150),new Point(165,148),new Point(166,146)));
		// this.Unistrokes[11] = new Unistroke("delete", new Array(new Point(123,129),new Point(123,131),new Point(124,133),new Point(125,136),new Point(127,140),new Point(129,142),new Point(133,148),new Point(137,154),new Point(143,158),new Point(145,161),new Point(148,164),new Point(153,170),new Point(158,176),new Point(160,178),new Point(164,183),new Point(168,188),new Point(171,191),new Point(175,196),new Point(178,200),new Point(180,202),new Point(181,205),new Point(184,208),new Point(186,210),new Point(187,213),new Point(188,215),new Point(186,212),new Point(183,211),new Point(177,208),new Point(169,206),new Point(162,205),new Point(154,207),new Point(145,209),new Point(137,210),new Point(129,214),new Point(122,217),new Point(118,218),new Point(111,221),new Point(109,222),new Point(110,219),new Point(112,217),new Point(118,209),new Point(120,207),new Point(128,196),new Point(135,187),new Point(138,183),new Point(148,167),new Point(157,153),new Point(163,145),new Point(165,142),new Point(172,133),new Point(177,127),new Point(179,127),new Point(180,125)));
		// this.Unistrokes[12] = new Unistroke("left curly brace", new Array(new Point(150,116),new Point(147,117),new Point(145,116),new Point(142,116),new Point(139,117),new Point(136,117),new Point(133,118),new Point(129,121),new Point(126,122),new Point(123,123),new Point(120,125),new Point(118,127),new Point(115,128),new Point(113,129),new Point(112,131),new Point(113,134),new Point(115,134),new Point(117,135),new Point(120,135),new Point(123,137),new Point(126,138),new Point(129,140),new Point(135,143),new Point(137,144),new Point(139,147),new Point(141,149),new Point(140,152),new Point(139,155),new Point(134,159),new Point(131,161),new Point(124,166),new Point(121,166),new Point(117,166),new Point(114,167),new Point(112,166),new Point(114,164),new Point(116,163),new Point(118,163),new Point(120,162),new Point(122,163),new Point(125,164),new Point(127,165),new Point(129,166),new Point(130,168),new Point(129,171),new Point(127,175),new Point(125,179),new Point(123,184),new Point(121,190),new Point(120,194),new Point(119,199),new Point(120,202),new Point(123,207),new Point(127,211),new Point(133,215),new Point(142,219),new Point(148,220),new Point(151,221)));
		// this.Unistrokes[13] = new Unistroke("right curly brace", new Array(new Point(117,132),new Point(115,132),new Point(115,129),new Point(117,129),new Point(119,128),new Point(122,127),new Point(125,127),new Point(127,127),new Point(130,127),new Point(133,129),new Point(136,129),new Point(138,130),new Point(140,131),new Point(143,134),new Point(144,136),new Point(145,139),new Point(145,142),new Point(145,145),new Point(145,147),new Point(145,149),new Point(144,152),new Point(142,157),new Point(141,160),new Point(139,163),new Point(137,166),new Point(135,167),new Point(133,169),new Point(131,172),new Point(128,173),new Point(126,176),new Point(125,178),new Point(125,180),new Point(125,182),new Point(126,184),new Point(128,187),new Point(130,187),new Point(132,188),new Point(135,189),new Point(140,189),new Point(145,189),new Point(150,187),new Point(155,186),new Point(157,185),new Point(159,184),new Point(156,185),new Point(154,185),new Point(149,185),new Point(145,187),new Point(141,188),new Point(136,191),new Point(134,191),new Point(131,192),new Point(129,193),new Point(129,195),new Point(129,197),new Point(131,200),new Point(133,202),new Point(136,206),new Point(139,211),new Point(142,215),new Point(145,220),new Point(147,225),new Point(148,231),new Point(147,239),new Point(144,244),new Point(139,248),new Point(134,250),new Point(126,253),new Point(119,253),new Point(115,253)));
		// this.Unistrokes[14] = new Unistroke("star", new Array(new Point(75,250),new Point(75,247),new Point(77,244),new Point(78,242),new Point(79,239),new Point(80,237),new Point(82,234),new Point(82,232),new Point(84,229),new Point(85,225),new Point(87,222),new Point(88,219),new Point(89,216),new Point(91,212),new Point(92,208),new Point(94,204),new Point(95,201),new Point(96,196),new Point(97,194),new Point(98,191),new Point(100,185),new Point(102,178),new Point(104,173),new Point(104,171),new Point(105,164),new Point(106,158),new Point(107,156),new Point(107,152),new Point(108,145),new Point(109,141),new Point(110,139),new Point(112,133),new Point(113,131),new Point(116,127),new Point(117,125),new Point(119,122),new Point(121,121),new Point(123,120),new Point(125,122),new Point(125,125),new Point(127,130),new Point(128,133),new Point(131,143),new Point(136,153),new Point(140,163),new Point(144,172),new Point(145,175),new Point(151,189),new Point(156,201),new Point(161,213),new Point(166,225),new Point(169,233),new Point(171,236),new Point(174,243),new Point(177,247),new Point(178,249),new Point(179,251),new Point(180,253),new Point(180,255),new Point(179,257),new Point(177,257),new Point(174,255),new Point(169,250),new Point(164,247),new Point(160,245),new Point(149,238),new Point(138,230),new Point(127,221),new Point(124,220),new Point(112,212),new Point(110,210),new Point(96,201),new Point(84,195),new Point(74,190),new Point(64,182),new Point(55,175),new Point(51,172),new Point(49,170),new Point(51,169),new Point(56,169),new Point(66,169),new Point(78,168),new Point(92,166),new Point(107,164),new Point(123,161),new Point(140,162),new Point(156,162),new Point(171,160),new Point(173,160),new Point(186,160),new Point(195,160),new Point(198,161),new Point(203,163),new Point(208,163),new Point(206,164),new Point(200,167),new Point(187,172),new Point(174,179),new Point(172,181),new Point(153,192),new Point(137,201),new Point(123,211),new Point(112,220),new Point(99,229),new Point(90,237),new Point(80,244),new Point(73,250),new Point(69,254),new Point(69,252)));
		// this.Unistrokes[15] = new Unistroke("pigtail", new Array(new Point(81,219),new Point(84,218),new Point(86,220),new Point(88,220),new Point(90,220),new Point(92,219),new Point(95,220),new Point(97,219),new Point(99,220),new Point(102,218),new Point(105,217),new Point(107,216),new Point(110,216),new Point(113,214),new Point(116,212),new Point(118,210),new Point(121,208),new Point(124,205),new Point(126,202),new Point(129,199),new Point(132,196),new Point(136,191),new Point(139,187),new Point(142,182),new Point(144,179),new Point(146,174),new Point(148,170),new Point(149,168),new Point(151,162),new Point(152,160),new Point(152,157),new Point(152,155),new Point(152,151),new Point(152,149),new Point(152,146),new Point(149,142),new Point(148,139),new Point(145,137),new Point(141,135),new Point(139,135),new Point(134,136),new Point(130,140),new Point(128,142),new Point(126,145),new Point(122,150),new Point(119,158),new Point(117,163),new Point(115,170),new Point(114,175),new Point(117,184),new Point(120,190),new Point(125,199),new Point(129,203),new Point(133,208),new Point(138,213),new Point(145,215),new Point(155,218),new Point(164,219),new Point(166,219),new Point(177,219),new Point(182,218),new Point(192,216),new Point(196,213),new Point(199,212),new Point(201,211)));
		//this.Unistrokes.push( new Unistroke("rectangle", this.Unistrokes[0].Points.slice().reverse() ) );
		//this.Unistrokes.push( new Unistroke("rectangle", [Point(0, 0), Point(0, 30), Point(10, 30), Point(10, 0), Point(0, 0)] ) );
		var line = [Point(0, 0), Point(100, 0)];
		this.Unistrokes.push(new Unistroke("line", line.slice()));
		this.Unistrokes.push(new Unistroke("line", line.slice().reverse()));

		NumUnistrokes = this.Unistrokes.length;

		//
		// The $1 Gesture Recognizer API begins here -- 3 methods: Recognize(), AddGesture(), and DeleteUserGestures()
		//
		this.Recognize = function (points, useProtractor) {
			points = Resample(points, NumPoints);
			var radians = IndicativeAngle(points);
			points = RotateBy(points, -radians);
			points = ScaleTo(points, SquareSize);
			points = TranslateTo(points, Origin);
			var vector = Vectorize(points); // for Protractor

			var b = +Infinity;
			var u = -1;
			let scores = [];
			for (var i = 0; i < this.Unistrokes.length; i++) // for each unistroke
			{
				var d;
				if (useProtractor) // for Protractor
					d = OptimalCosineDistance(this.Unistrokes[i].Vector, vector);
				else // Golden Section Search (original $1)
					d = DistanceAtBestAngle(points, this.Unistrokes[i], -AngleRange, +AngleRange, AnglePrecision);
				scores.push({ Shape: this.Unistrokes[i].Name, Score: d });
				if (d < b) {
					b = d; // best (least) distance
					u = i; // unistroke
				}
			}
			//console.log( (radians / Math.PI * 180).toFixed(2) + 'deg' );
			return {
				result: (u == -1) ? new Result("No match.", 0.0) : new Result(this.Unistrokes[u].Name, useProtractor ? 1.0 / b : 1.0 - b / HalfDiagonal),
				list: scores.sort(function (a, b) { return a.Score - b.Score })
			}
			// return (u == -1) ? new Result("No match.", 0.0) : new Result(this.Unistrokes[u].Name, useProtractor ? 1.0 / b : 1.0 - b / HalfDiagonal);
		};

		this.Rank = function (points, useProtractor) {
			points = Resample(points, NumPoints);
			var radians = IndicativeAngle(points);
			points = RotateBy(points, -radians);
			points = ScaleTo(points, SquareSize);
			points = TranslateTo(points, Origin);
			var vector = Vectorize(points); // for Protractor
			var ranks = [];

			var b = +Infinity;
			var u = -1;
			for (var i = 0; i < this.Unistrokes.length; i++) // for each unistroke
			{
				var d;
				if (useProtractor) // for Protractor
					d = OptimalCosineDistance(this.Unistrokes[i].Vector, vector);
				else // Golden Section Search (original $1)
					d = DistanceAtBestAngle(points, this.Unistrokes[i], -AngleRange, +AngleRange, AnglePrecision);
				ranks.push(new Result(this.Unistrokes[i].Name, useProtractor ? 1.0 / d : 1.0 - d / HalfDiagonal));
			}

			// Sort by score
			ranks.sort(function (a, b) {
				if (a.Score > b.Score) {
					return -1;
				} else if (a.Score < b.Score) {
					return 1;
				} else {
					return 0;
				}
			});

			return ranks;
		}

		this.AddGesture = function (name, points) {
			this.Unistrokes[this.Unistrokes.length] = new Unistroke(name, points); // append new unistroke
			var num = 0;
			for (var i = 0; i < this.Unistrokes.length; i++) {
				if (this.Unistrokes[i].Name == name)
					num++;
			}
			return num;
		}
		this.DeleteUserGestures = function () {
			this.Unistrokes.length = NumUnistrokes; // clear any beyond the original set
			return NumUnistrokes;
		}
	}
	//
	// Private helper functions from this point down
	//
	function Resample(points, n) {
		var I = PathLength(points) / (n - 1); // interval length
		var D = 0.0;
		var newpoints = new Array(points[0]);
		for (var i = 1; i < points.length; i++) {
			var d = Distance(points[i - 1], points[i]);
			if ((D + d) >= I) {
				var qx = points[i - 1].X + ((I - D) / d) * (points[i].X - points[i - 1].X);
				var qy = points[i - 1].Y + ((I - D) / d) * (points[i].Y - points[i - 1].Y);
				var q = new Point(qx, qy);
				newpoints[newpoints.length] = q; // append new point 'q'
				points.splice(i, 0, q); // insert 'q' at position i in points s.t. 'q' will be the next i
				D = 0.0;
			}
			else D += d;
		}
		if (newpoints.length == n - 1) // somtimes we fall a rounding-error short of adding the last point, so add it if so
			newpoints[newpoints.length] = new Point(points[points.length - 1].X, points[points.length - 1].Y);
		return newpoints;
	}
	function IndicativeAngle(points) {
		var c = Centroid(points);
		//return 0;
		return Math.atan2(c.Y - points[0].Y, c.X - points[0].X);
	}
	function RotateBy(points, radians) // rotates points around centroid
	{
		var c = Centroid(points);
		var cos = Math.cos(radians);
		var sin = Math.sin(radians);
		var newpoints = new Array();
		for (var i = 0; i < points.length; i++) {
			var qx = (points[i].X - c.X) * cos - (points[i].Y - c.Y) * sin + c.X
			var qy = (points[i].X - c.X) * sin + (points[i].Y - c.Y) * cos + c.Y;
			newpoints[newpoints.length] = new Point(qx, qy);
		}
		return newpoints;
	}
	function ScaleTo(points, size) // non-uniform scale; assumes 2D gestures (i.e., no lines)
	{
		var B = BoundingBox(points);

		// Algorithm didn't handle lines well as the thin axis would exagerate even the
		// slightest wiggle into a mountain after scaling, this
		var min = Math.min(B.Width, B.Height);
		var max = Math.max(B.Width, B.Height);
		if (min / max < 0.2) {
			B.Width = max;
			B.Height = max;
		}

		var newpoints = new Array();
		for (var i = 0; i < points.length; i++) {
			var qx = points[i].X * (size / B.Width);
			var qy = points[i].Y * (size / B.Height);
			newpoints[newpoints.length] = new Point(qx, qy);
		}
		return newpoints;
	}
	function TranslateTo(points, pt) // translates points' centroid
	{
		var c = Centroid(points);
		var newpoints = new Array();
		for (var i = 0; i < points.length; i++) {
			var qx = points[i].X + pt.X - c.X;
			var qy = points[i].Y + pt.Y - c.Y;
			newpoints[newpoints.length] = new Point(qx, qy);
		}
		return newpoints;
	}
	function Vectorize(points) // for Protractor
	{
		var sum = 0.0;
		var vector = new Array();
		for (var i = 0; i < points.length; i++) {
			vector[vector.length] = points[i].X;
			vector[vector.length] = points[i].Y;
			sum += points[i].X * points[i].X + points[i].Y * points[i].Y;
		}
		var magnitude = Math.sqrt(sum);
		for (var i = 0; i < vector.length; i++)
			vector[i] /= magnitude;
		return vector;
	}
	function OptimalCosineDistance(v1, v2) // for Protractor
	{
		var a = 0.0;
		var b = 0.0;
		for (var i = 0; i < v1.length; i += 2) {
			a += v1[i] * v2[i] + v1[i + 1] * v2[i + 1];
			b += v1[i] * v2[i + 1] - v1[i + 1] * v2[i];
		}
		var angle = Math.atan(b / a);
		return Math.acos(a * Math.cos(angle) + b * Math.sin(angle));
	}
	function DistanceAtBestAngle(points, T, a, b, threshold) {
		var x1 = Phi * a + (1.0 - Phi) * b;
		var f1 = DistanceAtAngle(points, T, x1);
		var x2 = (1.0 - Phi) * a + Phi * b;
		var f2 = DistanceAtAngle(points, T, x2);
		while (Math.abs(b - a) > threshold) {
			if (f1 < f2) {
				b = x2;
				x2 = x1;
				f2 = f1;
				x1 = Phi * a + (1.0 - Phi) * b;
				f1 = DistanceAtAngle(points, T, x1);
			} else {
				a = x1;
				x1 = x2;
				f1 = f2;
				x2 = (1.0 - Phi) * a + Phi * b;
				f2 = DistanceAtAngle(points, T, x2);
			}
		}
		return Math.min(f1, f2);
	}
	function DistanceAtAngle(points, T, radians) {
		var newpoints = RotateBy(points, radians);
		return PathDistance(newpoints, T.Points);
	}
	function Centroid(points) {
		var x = 0.0, y = 0.0;
		for (var i = 0; i < points.length; i++) {
			x += points[i].X;
			y += points[i].Y;
		}
		x /= points.length;
		y /= points.length;
		return new Point(x, y);
	}
	function BoundingBox(points) {
		var minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;
		for (var i = 0; i < points.length; i++) {
			minX = Math.min(minX, points[i].X);
			minY = Math.min(minY, points[i].Y);
			maxX = Math.max(maxX, points[i].X);
			maxY = Math.max(maxY, points[i].Y);
		}
		return new Rectangle(minX, minY, maxX - minX, maxY - minY);
	}
	function PathDistance(pts1, pts2) {
		var d = 0.0;
		for (var i = 0; i < pts1.length; i++) // assumes pts1.length == pts2.length
			d += Distance(pts1[i], pts2[i]);
		return d / pts1.length;
	}
	function PathLength(points) {
		var d = 0.0;
		for (var i = 1; i < points.length; i++)
			d += Distance(points[i - 1], points[i]);
		return d;
	}
	function Distance(p1, p2) {
		var dx = p2.X - p1.X;
		var dy = p2.Y - p1.Y;
		return Math.sqrt(dx * dx + dy * dy);
	}
	function Deg2Rad(d) { return (d * Math.PI / 180.0); }

	var outlines = {
		Point: Point,
		DollarRecognizer: DollarRecognizer
	};

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = outlines;
	} else {
		window.outlines = outlines;
	}

})();