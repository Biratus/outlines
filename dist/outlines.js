/**
 * The $P Point-Cloud Recognizer (JavaScript version)
 *
 * 	Radu-Daniel Vatavu, Ph.D.
 *	University Stefan cel Mare of Suceava
 *	Suceava 720229, Romania
 *	vatavu@eed.usv.ro
 *
 *	Lisa Anthony, Ph.D.
 *      UMBC
 *      Information Systems Department
 *      1000 Hilltop Circle
 *      Baltimore, MD 21250
 *      lanthony@umbc.edu
 *
 *	Jacob O. Wobbrock, Ph.D.
 * 	The Information School
 *	University of Washington
 *	Seattle, WA 98195-2840
 *	wobbrock@uw.edu
 *
 * The academic publication for the $P recognizer, and what should be
 * used to cite it, is:
 *
 *	Vatavu, R.-D., Anthony, L. and Wobbrock, J.O. (2012).
 *	  Gestures as point clouds: A $P recognizer for user interface
 *	  prototypes. Proceedings of the ACM Int'l Conference on
 *	  Multimodal Interfaces (ICMI '12). Santa Monica, California
 *	  (October 22-26, 2012). New York: ACM Press, pp. 273-280.
 *
 * This software is distributed under the "New BSD License" agreement:
 *
 * Copyright (c) 2012, Radu-Daniel Vatavu, Lisa Anthony, and
 * Jacob O. Wobbrock. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    * Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer.
 *    * Redistributions in binary form must reproduce the above copyright
 *      notice, this list of conditions and the following disclaimer in the
 *      documentation and/or other materials provided with the distribution.
 *    * Neither the names of the University Stefan cel Mare of Suceava,
 *	University of Washington, nor UMBC, nor the names of its contributors
 *	may be used to endorse or promote products derived from this software
 *	without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Radu-Daniel Vatavu OR Lisa Anthony
 * OR Jacob O. Wobbrock BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
 * OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
**/
(function () {

	//
	// Point class
	//

	// constructor
	function Point(x, y, id) {
		this.X = x;
		this.Y = y;
		this.ID = id; // stroke ID to which this point belongs (1,2,...)
	}

	//
	// PointCloud class: a point-cloud template
	//

	// constructor
	function PointCloud(name, points) {
		this.Name = name;

		this.Points = Normalize(points);
	}
	//
	// Result class
	//

	// constructor
	function Result(name, score) {
		this.Name = name;
		this.Score = score;
	}

	//
	// Recognizer class constants
	//
	var NumPoints = 32;
	var Origin = new Point(0, 0, 0);
	//
	// Recognizer class
	//

	//constructor
	function Recognizer(gestures) {
		//
		// one predefined point-cloud for each gesture
		//
		this.PointClouds = [];

		// FRANCOIS: Testing various shapes
		// Square
		this.PointClouds.push(new PointCloud("Square", [
			// TL
			new Point(0, 0, 1),
			// TR
			new Point(1.3, 0, 1),
			// BR
			new Point(1.3, 1, 1),
			// BL
			new Point(0, 1, 1),
			// TL again to close the square
			new Point(0, 0, 1)
		]));
		// Diamond
		this.PointClouds.push(new PointCloud("Diamond", [
			// Top
			new Point(0, -1, 1),
			// Right
			new Point(1.3, 0, 1),
			// Bottom
			new Point(0, 1, 1),
			// Left
			new Point(-1.3, 0, 1),
			// Top again to close the diamond
			new Point(0, -1, 1)
		]));
		// Horizontal Line
		this.PointClouds.push(new PointCloud("Horizontal", [
			new Point(0, 0, 1), new Point(10, 0, 1)
		]));
		// Vertical Line
		this.PointClouds.push(new PointCloud("Vertical", [
			new Point(0, 0, 1), new Point(0, 10, 1)
		]));
		// Circle Line
		var circlePoints = [];
		for (var i = 0; i < NumPoints; i++) {
			circlePoints.push(new Point(
				Math.floor(Math.sin(i / (NumPoints - 1) * Math.PI * 2) * 100),
				Math.floor(Math.cos(i / (NumPoints - 1) * Math.PI * 2) * 100),
				1));
		}
		this.PointClouds.push(new PointCloud("Circle", circlePoints));

		// FRANCOIS: Previous built in gestures. Need to refactor code to make these
		// specified in some other way than baked in
		/*
		this.PointClouds[0] = new PointCloud("T", new Array(
			new Point(30,7,1),new Point(103,7,1),
			new Point(66,7,2),new Point(66,87,2)
		));
		this.PointClouds[1] = new PointCloud("N", new Array(
			new Point(177,92,1),new Point(177,2,1),
			new Point(182,1,2),new Point(246,95,2),
			new Point(247,87,3),new Point(247,1,3)
		));
		this.PointClouds[2] = new PointCloud("D", new Array(
			new Point(345,9,1),new Point(345,87,1),
			new Point(351,8,2),new Point(363,8,2),new Point(372,9,2),new Point(380,11,2),new Point(386,14,2),new Point(391,17,2),new Point(394,22,2),new Point(397,28,2),new Point(399,34,2),new Point(400,42,2),new Point(400,50,2),new Point(400,56,2),new Point(399,61,2),new Point(397,66,2),new Point(394,70,2),new Point(391,74,2),new Point(386,78,2),new Point(382,81,2),new Point(377,83,2),new Point(372,85,2),new Point(367,87,2),new Point(360,87,2),new Point(355,88,2),new Point(349,87,2)
		));
		this.PointClouds[3] = new PointCloud("P", new Array(
			new Point(507,8,1),new Point(507,87,1),
			new Point(513,7,2),new Point(528,7,2),new Point(537,8,2),new Point(544,10,2),new Point(550,12,2),new Point(555,15,2),new Point(558,18,2),new Point(560,22,2),new Point(561,27,2),new Point(562,33,2),new Point(561,37,2),new Point(559,42,2),new Point(556,45,2),new Point(550,48,2),new Point(544,51,2),new Point(538,53,2),new Point(532,54,2),new Point(525,55,2),new Point(519,55,2),new Point(513,55,2),new Point(510,55,2)
		));
		this.PointClouds[4] = new PointCloud("X", new Array(
			new Point(30,146,1),new Point(106,222,1),
			new Point(30,225,2),new Point(106,146,2)
		));
		this.PointClouds[5] = new PointCloud("H", new Array(
			new Point(188,137,1),new Point(188,225,1),
			new Point(188,180,2),new Point(241,180,2),
			new Point(241,137,3),new Point(241,225,3)
		));
		this.PointClouds[6] = new PointCloud("I", new Array(
			new Point(371,149,1),new Point(371,221,1),
			new Point(341,149,2),new Point(401,149,2),
			new Point(341,221,3),new Point(401,221,3)
		));
		this.PointClouds[7] = new PointCloud("exclamation", new Array(
			new Point(526,142,1),new Point(526,204,1),
			new Point(526,221,2)
		));
		this.PointClouds[8] = new PointCloud("line", new Array(
			new Point(12,347,1),new Point(119,347,1)
		));
		this.PointClouds[9] = new PointCloud("five-point star", new Array(
			new Point(177,396,1),new Point(223,299,1),new Point(262,396,1),new Point(168,332,1),new Point(278,332,1),new Point(184,397,1)
		));
		this.PointClouds[10] = new PointCloud("null", new Array(
			new Point(382,310,1),new Point(377,308,1),new Point(373,307,1),new Point(366,307,1),new Point(360,310,1),new Point(356,313,1),new Point(353,316,1),new Point(349,321,1),new Point(347,326,1),new Point(344,331,1),new Point(342,337,1),new Point(341,343,1),new Point(341,350,1),new Point(341,358,1),new Point(342,362,1),new Point(344,366,1),new Point(347,370,1),new Point(351,374,1),new Point(356,379,1),new Point(361,382,1),new Point(368,385,1),new Point(374,387,1),new Point(381,387,1),new Point(390,387,1),new Point(397,385,1),new Point(404,382,1),new Point(408,378,1),new Point(412,373,1),new Point(416,367,1),new Point(418,361,1),new Point(419,353,1),new Point(418,346,1),new Point(417,341,1),new Point(416,336,1),new Point(413,331,1),new Point(410,326,1),new Point(404,320,1),new Point(400,317,1),new Point(393,313,1),new Point(392,312,1),
			new Point(418,309,2),new Point(337,390,2)
		));
		this.PointClouds[11] = new PointCloud("arrowhead", new Array(
			new Point(506,349,1),new Point(574,349,1),
			new Point(525,306,2),new Point(584,349,2),new Point(525,388,2)
		));
		this.PointClouds[12] = new PointCloud("pitchfork", new Array(
			new Point(38,470,1),new Point(36,476,1),new Point(36,482,1),new Point(37,489,1),new Point(39,496,1),new Point(42,500,1),new Point(46,503,1),new Point(50,507,1),new Point(56,509,1),new Point(63,509,1),new Point(70,508,1),new Point(75,506,1),new Point(79,503,1),new Point(82,499,1),new Point(85,493,1),new Point(87,487,1),new Point(88,480,1),new Point(88,474,1),new Point(87,468,1),
			new Point(62,464,2),new Point(62,571,2)
		));
		this.PointClouds[13] = new PointCloud("six-point star", new Array(
			new Point(177,554,1),new Point(223,476,1),new Point(268,554,1),new Point(183,554,1),
			new Point(177,490,2),new Point(223,568,2),new Point(268,490,2),new Point(183,490,2)
		));
		this.PointClouds[14] = new PointCloud("asterisk", new Array(
			new Point(325,499,1),new Point(417,557,1),
			new Point(417,499,2),new Point(325,557,2),
			new Point(371,486,3),new Point(371,571,3)
		));
		this.PointClouds[15] = new PointCloud("half-note", new Array(
			new Point(546,465,1),new Point(546,531,1),
			new Point(540,530,2),new Point(536,529,2),new Point(533,528,2),new Point(529,529,2),new Point(524,530,2),new Point(520,532,2),new Point(515,535,2),new Point(511,539,2),new Point(508,545,2),new Point(506,548,2),new Point(506,554,2),new Point(509,558,2),new Point(512,561,2),new Point(517,564,2),new Point(521,564,2),new Point(527,563,2),new Point(531,560,2),new Point(535,557,2),new Point(538,553,2),new Point(542,548,2),new Point(544,544,2),new Point(546,540,2),new Point(546,536,2)
		));*/


		/*
		 * The $P Point-Cloud Recognizer API begins here -- 3 methods: Recognize(), AddGesture(), DeleteUserGestures()
		 */
		this.Recognize = function (points) {
			points = Normalize(points);

			var b = +Infinity;
			var u = -1;
			for (var i = 0; i < this.PointClouds.length; i++) // for each point-cloud template
			{
				var d = GreedyCloudMatch(points, this.PointClouds[i]);
				if (d < b) {
					b = d; // best (least) distance
					u = i; // point-cloud
				}
			}
			return (u == -1) ? new Result("No match.", 0.0) : new Result(this.PointClouds[u].Name, Math.max((b - 2.0) / -2.0, 0.0));
		};

		/*
		 * Similar to Recognize() but instead of returning the closest match, instead it
		 * returns a list of matches sorted by the closest match to the farthest
		 */
		this.Rank = function (points) {
			points = Normalize(points);

			// For each point-cloud template
			var matches = [];
			for (var i = 0; i < this.PointClouds.length; i++) {
				var d = GreedyCloudMatch(points, this.PointClouds[i]);
				matches.push(new Result(this.PointClouds[i].Name, Math.max((d - 2.0) / -2.0, 0.0)));
			}

			// Sort by score
			matches.sort(function (a, b) {
				if (a.Score > b.Score) {
					return -1;
				} else if (a.Score < b.Score) {
					return 1;
				} else {
					return 0;
				}
			});

			return matches;
		};
	}
	//
	// Private helper functions from this point down
	//
	function GreedyCloudMatch(points, P) {
		var e = 0.50;
		var step = Math.floor(Math.pow(points.length, 1 - e));
		var min = +Infinity;
		for (var i = 0; i < points.length; i += step) {
			var d1 = CloudDistance(points, P.Points, i);
			var d2 = CloudDistance(P.Points, points, i);
			min = Math.min(min, Math.min(d1, d2)); // min3
		}
		return min;
	}

	function CloudDistance(pts1, pts2, start) {
		var matched = new Array(pts1.length); // pts1.length == pts2.length
		for (var k = 0; k < pts1.length; k++)
			matched[k] = false;
		var sum = 0;
		var i = start;
		do {
			var index = -1;
			var min = +Infinity;
			for (var j = 0; j < matched.length; j++) {
				if (!matched[j]) {
					var d = Distance(pts1[i], pts2[j]);
					if (d < min) {
						min = d;
						index = j;
					}
				}
			}
			matched[index] = true;
			var weight = 1 - ((i - start + pts1.length) % pts1.length) / pts1.length;
			sum += weight * min;
			i = (i + 1) % pts1.length;
		} while (i != start);
		return sum;
	}

	/*
	* Gesture points are resampled, scaled with shape preservation, and translated to origin.
	*/
	function Normalize(points) {
		points = Resample(points, NumPoints);
		points = Scale(points);
		points = TranslateTo(points, Origin);
		return points;
	};

	function clonePoints(points) {
		var newPoints = [];
		points.forEach(function (pt) {
			newPoints.push(new Point(pt.X, pt.Y, pt.ID));
		});
		return newPoints;
	}

	function Resample(points, n) {
		points = clonePoints(points);
		var I = PathLength(points) / (n - 1); // interval length
		var D = 0.0;
		var newpoints = new Array(new Point(points[0].X, points[0].Y, points[0].ID));
		for (var i = 1; i < points.length; i++) {
			if (points[i].ID == points[i - 1].ID) {
				var d = Distance(points[i - 1], points[i]);
				if ((D + d) >= I) {
					var qx = points[i - 1].X + ((I - D) / d) * (points[i].X - points[i - 1].X);
					var qy = points[i - 1].Y + ((I - D) / d) * (points[i].Y - points[i - 1].Y);
					var q = new Point(qx, qy, points[i].ID);
					newpoints[newpoints.length] = q; // append new point 'q'
					points.splice(i, 0, q); // insert 'q' at position i in points s.t. 'q' will be the next i
					D = 0.0;
				}
				else D += d;
			}
		}
		if (newpoints.length == n - 1) // sometimes we fall a rounding-error short of adding the last point, so add it if so
			newpoints[newpoints.length] = new Point(points[points.length - 1].X, points[points.length - 1].Y, points[points.length - 1].ID);
		return newpoints;
	}

	// Scale the points so they are in a normalized box with x & y = [0,1]. This makes
	// comparing gestures against point clouds scale invariant
	function Scale(points) {

		// Find the bounding box of points
		var minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;
		for (var i = 0; i < points.length; i++) {
			minX = Math.min(minX, points[i].X);
			minY = Math.min(minY, points[i].Y);
			maxX = Math.max(maxX, points[i].X);
			maxY = Math.max(maxY, points[i].Y);
		}

		// Figure out the max dimension (either the width or height is biggest)
		var size = Math.max(maxX - minX, maxY - minY);

		// Scale points down into a square of 1.0 x 1.0 dimensions, while maintaining
		// x/y proportions
		var newpoints = new Array();
		for (var i = 0; i < points.length; i++) {
			var qx = (points[i].X - minX) / size;
			var qy = (points[i].Y - minY) / size;
			newpoints[newpoints.length] = new Point(qx, qy, points[i].ID);
		}
		return newpoints;
	}

	// Translates points' so that their average position becomes the origin (ie the PointCloud's
	// points are centered around the origin)
	//
	// NOTE: It seems the pt parameter is redundant as it's always passed an 0,0 vector
	// which makes it have no effect when adding it's components below
	function TranslateTo(points, pt) {
		var c = Centroid(points);
		var newpoints = new Array();
		for (var i = 0; i < points.length; i++) {
			var qx = points[i].X + pt.X - c.X;
			var qy = points[i].Y + pt.Y - c.Y;
			newpoints[newpoints.length] = new Point(qx, qy, points[i].ID);
		}
		return newpoints;
	}

	// Compute the average position of all the points
	function Centroid(points) {
		var x = 0.0, y = 0.0;
		for (var i = 0; i < points.length; i++) {
			x += points[i].X;
			y += points[i].Y;
		}
		x /= points.length;
		y /= points.length;
		return new Point(x, y, 0);
	}

	// length traversed by a point path
	function PathLength(points) {
		var d = 0.0;
		for (var i = 1; i < points.length; i++) {
			if (points[i].ID == points[i - 1].ID)
				d += Distance(points[i - 1], points[i]);
		}
		return d;
	}

	// Euclidean distance between two points
	function Distance(p1, p2) {
		var dx = p2.X - p1.X;
		var dy = p2.Y - p1.Y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	var outlines = {
		Point: Point,
		Recognizer: Recognizer,
		PointCloud: PointCloud,
		Normalize: Normalize
	};

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = outlines;
	} else {
		window.outlines = outlines;
	}

})();
