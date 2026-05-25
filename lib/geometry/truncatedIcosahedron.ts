import * as THREE from "three";

/**
 * 切頂二十面体の頂点・面データ（JSModeler の GenerateTruncatedIcosahedron 準拠）
 * https://github.com/kovacsv/JSModeler
 */
function createCanonicalVertices(): THREE.Vector3[] {
  const a = 0;
  const b = 1;
  const c = 2;
  const d = (1 + Math.sqrt(5)) / 2;
  const e = 3 * d;
  const f = 1 + 2 * d;
  const g = 2 + d;
  const h = 2 * d;

  const raw: [number, number, number][] = [
    [+a, +b, +e],
    [+a, +b, -e],
    [+a, -b, +e],
    [+a, -b, -e],
    [+b, +e, +a],
    [+b, -e, +a],
    [-b, +e, +a],
    [-b, -e, +a],
    [+e, +a, +b],
    [-e, +a, +b],
    [+e, +a, -b],
    [-e, +a, -b],
    [+c, +f, +d],
    [+c, +f, -d],
    [+c, -f, +d],
    [-c, +f, +d],
    [+c, -f, -d],
    [-c, +f, -d],
    [-c, -f, +d],
    [-c, -f, -d],
    [+f, +d, +c],
    [+f, -d, +c],
    [-f, +d, +c],
    [+f, +d, -c],
    [-f, -d, +c],
    [+f, -d, -c],
    [-f, +d, -c],
    [-f, -d, -c],
    [+d, +c, +f],
    [-d, +c, +f],
    [+d, +c, -f],
    [+d, -c, +f],
    [-d, +c, -f],
    [-d, -c, +f],
    [+d, -c, -f],
    [-d, -c, -f],
    [+b, +g, +h],
    [+b, +g, -h],
    [+b, -g, +h],
    [-b, +g, +h],
    [+b, -g, -h],
    [-b, +g, -h],
    [-b, -g, +h],
    [-b, -g, -h],
    [+g, +h, +b],
    [+g, -h, +b],
    [-g, +h, +b],
    [+g, +h, -b],
    [-g, -h, +b],
    [+g, -h, -b],
    [-g, +h, -b],
    [-g, -h, -b],
    [+h, +b, +g],
    [-h, +b, +g],
    [+h, +b, -g],
    [+h, -b, +g],
    [-h, +b, -g],
    [-h, -b, +g],
    [+h, -b, -g],
    [-h, -b, -g],
  ];

  return raw.map(([x, y, z]) => new THREE.Vector3(x, y, z));
}

/** 正五角形12面 + 正六角形20面 */
const FACES: number[][] = [
  [0, 28, 36, 39, 29],
  [1, 32, 41, 37, 30],
  [2, 33, 42, 38, 31],
  [3, 34, 40, 43, 35],
  [4, 12, 44, 47, 13],
  [5, 16, 49, 45, 14],
  [6, 17, 50, 46, 15],
  [7, 18, 48, 51, 19],
  [8, 20, 52, 55, 21],
  [9, 24, 57, 53, 22],
  [10, 25, 58, 54, 23],
  [11, 26, 56, 59, 27],
  [0, 2, 31, 55, 52, 28],
  [0, 29, 53, 57, 33, 2],
  [1, 3, 35, 59, 56, 32],
  [1, 30, 54, 58, 34, 3],
  [4, 6, 15, 39, 36, 12],
  [4, 13, 37, 41, 17, 6],
  [5, 7, 19, 43, 40, 16],
  [5, 14, 38, 42, 18, 7],
  [8, 10, 23, 47, 44, 20],
  [8, 21, 45, 49, 25, 10],
  [9, 11, 27, 51, 48, 24],
  [9, 22, 46, 50, 26, 11],
  [12, 36, 28, 52, 20, 44],
  [13, 47, 23, 54, 30, 37],
  [14, 45, 21, 55, 31, 38],
  [15, 46, 22, 53, 29, 39],
  [16, 40, 34, 58, 25, 49],
  [17, 41, 32, 56, 26, 50],
  [18, 42, 33, 57, 24, 48],
  [19, 51, 27, 59, 35, 43],
];

/** 中心を原点に、指定半径に正規化 */
export function normalizeVertices(
  vertices: THREE.Vector3[],
  radius: number
): THREE.Vector3[] {
  const box = new THREE.Box3().setFromPoints(vertices);
  const center = box.getCenter(new THREE.Vector3());
  let maxDist = 0;
  for (const v of vertices) {
    maxDist = Math.max(maxDist, v.distanceTo(center));
  }
  const scale = radius / maxDist;
  return vertices.map((v) =>
    v.clone().sub(center).multiplyScalar(scale)
  );
}

/** 面の輪郭からエッジ（90本）を抽出 */
export function buildEdgesFromFaces(faces: number[][]): [number, number][] {
  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];

  for (const face of faces) {
    for (let i = 0; i < face.length; i++) {
      const a = face[i];
      const b = face[(i + 1) % face.length];
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([a, b]);
      }
    }
  }

  return edges;
}

/** LineSegments 用の頂点座標配列 */
export function edgesToPositions(
  vertices: THREE.Vector3[],
  edges: [number, number][]
): Float32Array {
  const positions = new Float32Array(edges.length * 6);
  let offset = 0;

  for (const [a, b] of edges) {
    positions[offset++] = vertices[a].x;
    positions[offset++] = vertices[a].y;
    positions[offset++] = vertices[a].z;
    positions[offset++] = vertices[b].x;
    positions[offset++] = vertices[b].y;
    positions[offset++] = vertices[b].z;
  }

  return positions;
}

export function getTruncatedIcosahedronData() {
  const vertices = normalizeVertices(createCanonicalVertices(), 1);
  const edges = buildEdgesFromFaces(FACES);
  const linePositions = edgesToPositions(vertices, edges);
  return { vertices, edges, linePositions };
}
