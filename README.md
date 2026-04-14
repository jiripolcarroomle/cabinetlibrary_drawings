# tecConfig

## Initial setup

1. Install VSCode from: <https://code.visualstudio.com/>

2. Install NVM
   * Download zip file (nvm-setup.exe) from: <https://github.com/coreybutler/nvm-windows/releases>
   * Execute the program

3. Install plugins inside VSCode:
   * Error Lens: <https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens>
   * ESLint: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
   * IntelliCode: <https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode>
   * Prettier - code formatter: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
   * Spell Right: <https://marketplace.visualstudio.com/items?itemName=ban.spellright>

4. Install other stuff
   * Open VSCode
   * Open a new terminal (Terminal | New Terminal)
   * Install Node v22
   * Execute in the terminal: `nvm install 22.2.0`
   * Execute in the terminal: `nvm use 22.2.0`
   * Install yarn
   * Execute in the terminal: `npm install -g yarn`
   * You need to allow yarn to execute PowerShell scripts; the easiest way is to allow all scripts: `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope LocalMachine`

## Development

1. Download the "DEV-FULL-Download" package (ONLY NEEDED ONCE or on UI changes)
   1.1. After you have downloaded this ONCE you can then download the "DEV-LIB-Download" which only contains the library data)

2. Extract the ZIP file

3. Open the folder in VSCode

4. Open a new terminal (Terminal | New Terminal)

5. Enter in the new terminal the following (ONLY needed ONCE): `yarn install`

6. Start the program: (Run | Start Debugging - F5))

7. Develop your scripts

## Development server

Run `yarn run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `yarn run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 2D Drawing API

The 2D Drawing API provides functionality to generate floor plans and elevation views in SVG format from order data. The API creates optimized SVG outputs suitable for technical drawings and can also generate GLB files for debugging purposes.

### Overview

The typical workflow for using the Drawing API is:

1. **Initialize**: Call `newRoomDrawing2D()` to create a `RoomDrawing2D` object from order data
2. **Define Views**: Create `PlanViewDefinition` objects for floor plans and elevations
3. **Generate SVGs**: Call `generateSvgViews()` on the `RoomDrawing2D` object
4. **Enhance**: Optionally add dimensions, annotations, or polygons using helper functions
5. **Export**: Use `generateOptimizedSvgOutput()` to create final SVG files

### Data Types and Interfaces

#### IOrderInputData

Input data structure containing order and BOM information.

```typescript
export interface IOrderInputData {
  orderData: IOrderData;
  fullOrderLineGroups: IFullOrderLineGroupData[];
}
```

#### IOutputFileEntry

Represents an output file with its content and metadata.

```typescript
export interface IOutputFileEntry {
  fileName: string;        // Name of the output file
  content: string;         // File content (base64 encoded for binary files)
  contentType: string;     // MIME type of the file
}
```

#### ColorRepresentation

Color can be specified as a hex number or CSS color string.

```typescript
export type ColorRepresentation = string | number;
```

#### Box3Like

Represents an axis-aligned bounding box in 3D space.

```typescript
export interface Box3Like {
  readonly min: Vector3;   // Minimum corner of the box
  readonly max: Vector3;   // Maximum corner of the box
}
```

### Core Interfaces

#### RoomDrawing2D

The main object created by `newRoomDrawing2D()`. Contains the 3D scene data and methods to generate SVG views.

```typescript
export interface RoomDrawing2D {
  readonly sceneBox: Box3Like;              // Bounding box of the entire scene
  readonly articles: Article3D[];           // All articles (furniture) in the room
  readonly walls: WallSegment[];            // Wall segments in the room
  generateSvgViews(planViews?: PlanViewDefinition[]): SvgPlanViewOutput[];  // Generates SVG outputs
}
```

### Configuration Options

#### Part3DFactoryOptions

Options for configuring how parts are rendered in the 3D scene.

```typescript
export interface Part3DFactoryOptions {
  showOpen?: boolean;                    // Show parts in open state (e.g., doors)
  showDocking?: boolean;                 // Show docking information
  transparentParts?: boolean;            // Render parts with transparency
  surface?: boolean;                     // Render surfaces
  wireFrame?: boolean;                   // Render wireframe edges
  keepMeshMaterials?: boolean;           // Preserve original mesh materials
  surfaceColor?: ColorRepresentation;    // Color for surfaces
  meshColorScale?: number;               // Scale factor for mesh colors (0.0-1.0)
}
```

#### WallSegmentProps

Properties for configuring wall rendering.

```typescript
export interface WallSegmentProps {
  surface?: boolean;                     // Render wall surfaces
  wireFrame?: boolean;                   // Render wall edges
  wallColor?: ColorRepresentation;       // Color for walls
}
```

#### RoomScene3DOptions

Options for configuring the entire 3D room scene.

```typescript
export interface RoomScene3DOptions {
  part?: Part3DFactoryOptions;           // Options for part rendering
  wall?: WallSegmentProps;               // Options for wall rendering
}
```

#### RoomDrawing2DOptions

Main configuration options for creating a `RoomDrawing2D` object.

```typescript
export interface RoomDrawing2DOptions {
  sceneMargin?: number;                  // Margin around the scene (in mm)
  svgOriginalSceneSize?: boolean;        // Use original scene size for SVG
  svgSize?: number;                      // Target SVG size in pixels
  room3d?: RoomScene3DOptions;           // 3D scene rendering options
}
```

### View Definitions

#### PlanViewType

Enum defining the type of plan view.

```typescript
export enum PlanViewType {
  FloorPlan = 'floor-plan',              // Top-down floor plan view
  Elevation = 'elevation',               // Side elevation view
}
```

#### PlanViewDirection2d

Direction vector for elevation views in 2D space.

```typescript
export interface PlanViewDirection2d {
  x: number;                             // X component
  y: number;                             // Y component
}
```

#### PlanViewDefinition

Defines a specific view (floor plan or elevation) to be generated.

```typescript
export interface PlanViewDefinition {
  name: string;                          // Name of the view (used for file naming)
  type: PlanViewType;                    // Type of view (floor plan or elevation)
  elevationDirection?: PlanViewDirection2d;  // Direction for elevation views
  left: number;                          // Left boundary of the view frustum
  right: number;                         // Right boundary of the view frustum
  top: number;                           // Top boundary of the view frustum
  bottom: number;                        // Bottom boundary of the view frustum
  near: number;                          // Near clipping plane
  far: number;                           // Far clipping plane
  wallFilter?: WallFilter;               // Filter to include specific walls
  orderLineFilter?: ArticleFilter;       // Filter to include specific articles
  partFilter?: PartFilter;               // Filter to include specific parts
}
```

### Filter Functions

#### WallFilter

Function to filter which walls are included in a view.

```typescript
export type WallFilter = (wall: WallSegment) => boolean;
```

#### ArticleFilter

Function to filter which articles (order lines) are included in a view.

```typescript
export type ArticleFilter = (bomOrderLine: IBomOrderLineData) => boolean;
```

#### PartFilter

Function to filter which parts are included in a view.

```typescript
export type PartFilter = (
  part: I3DElement,
  bomOrderLine?: IBomOrderLineData
) => boolean;
```

### Scene Elements

#### Article3D

Represents a furniture article in the 3D scene.

```typescript
export interface Article3D {
  readonly orderLine?: IBomOrderLineData;        // Associated order line data
  readonly isGenerated: boolean;                 // Whether this article was auto-generated
  readonly volumeAbsolute?: Volume3D;            // Bounding volume in absolute coordinates
  readonly parts: Part3D[];                      // Parts that make up this article
}
```

#### Part3D

Represents a part (component) within an article.

```typescript
export interface Part3D {
  readonly part?: I3DElement;                    // Part data object
  readonly volumeInArticle?: Volume3D;           // Volume relative to article
  readonly volumeAbsolute?: Volume3D;            // Volume in absolute coordinates
  readonly parts: Part3D[];                      // Sub-parts (hierarchical structure)
}
```

#### Volume3D

Represents a 3D bounding volume with position and orientation.

```typescript
export interface Volume3D {
  readonly position: Vector3;                    // Position of the volume
  readonly rotationY: number;                    // Rotation around Y axis (radians)
  readonly directionX: Vector3;                  // Local X axis direction
  readonly directionY: Vector3;                  // Local Y axis direction
  readonly directionZ: Vector3;                  // Local Z axis direction
  readonly size: Vector3;                        // Size (width, height, depth)
  readonly floorPlanPolygon: Vector3[];          // Polygon points for floor plan
}
```

#### WallSegment

Represents a wall segment in the room.

```typescript
export interface WallSegment {
  readonly wallSegmentId: number;                // Unique identifier
  readonly segmentStart: Vector3;                // Start point of wall segment
  readonly segmentEnd: Vector3;                  // End point of wall segment
  readonly segmentBackStart: Vector3;            // Start point of back face
  readonly segmentBackEnd: Vector3;              // End point of back face
  readonly direction: Vector3;                   // Direction vector along wall
  readonly wallLength: number;                   // Length of wall (mm)
  readonly wallThickness: number;                // Thickness of wall (mm)
  readonly wallHeight: number;                   // Height of wall (mm)
  readonly rotationY: number;                    // Rotation around Y axis (radians)
  readonly normalToWall: Vector3;                // Normal vector perpendicular to wall
  readonly directionToWall: PlanViewDirection2d; // 2D direction from room to wall
  readonly distanceToWall: number;               // Distance from origin to wall
  readonly left: number;                         // Left boundary for elevation view
  readonly right: number;                        // Right boundary for elevation view
}
```

### SVG Output

#### SvgPartView2D

Represents a part in the SVG output.

```typescript
export interface SvgPartView2D {
  visualPart: I3DElement;                        // Visual part data
  polygonPoints: Vector3[];                      // Polygon points in SVG coordinates
  parts: SvgPartView2D[];                        // Sub-parts
}
```

#### SvgArticleView2D

Represents an article in the SVG output.

```typescript
export interface SvgArticleView2D {
  bomOrderLineData: IBomOrderLineData;           // Associated BOM data
  isGenerated: boolean;                          // Whether article was auto-generated
  polygonPoints: Vector3[];                      // Bounding polygon in SVG coordinates
  parts: SvgPartView2D[];                        // Parts within the article
}
```

#### SvgPlanViewOutput

The complete SVG output for a single view.

```typescript
export interface SvgPlanViewOutput {
  planView: PlanViewDefinition;                  // View definition used
  svgElement: SVGElement;                        // Generated SVG DOM element
  svgWidth: number;                              // Width of SVG in pixels
  svgHeight: number;                             // Height of SVG in pixels
  planToSvgScale: number;                        // Scale factor from plan (mm) to SVG (px)
  sceneToSvgTransform: Matrix4;                  // Transformation matrix
  articleViews: SvgArticleView2D[];              // Articles rendered in this view
}
```

#### DimensionPoints

Points for drawing dimension lines.

```typescript
export interface DimensionPoints {
  fromPoint: Vector3;                            // Start point of dimension
  toPoint: Vector3;                              // End point of dimension
  labelDistance: number;                         // Distance of label from measured line
}
```

### DrawingApi Interface

The main API for working with 2D drawings.

```typescript
export interface DrawingApi {
  /**
   * Creates a RoomDrawing2D object from order input data.
   * This is the first function that must be called to initialize the drawing system.
   * 
   * @param orderInputData - Order and BOM data
   * @param options - Configuration options for the room drawing
   * @returns Promise resolving to a RoomDrawing2D object
   */
  newRoomDrawing2D: (
    orderInputData: IOrderInputData,
    options?: RoomDrawing2DOptions
  ) => Promise<RoomDrawing2D>;

  /**
   * Transforms a 3D point to 2D SVG coordinates for a specific view.
   * 
   * @param point - 3D point to transform
   * @param svgViewOutput - The SVG view output containing transformation data
   * @returns Transformed point in SVG coordinate space
   */
  transform3dToView(
    point: Vector3,
    svgViewOutput: SvgPlanViewOutput
  ): Vector3;

  /**
   * Calculates optimal points for drawing dimension lines for an article.
   * 
   * @param planView - The plan view definition
   * @param articleView - The article to dimension
   * @param labelDistance - Distance of dimension label from the article
   * @returns Dimension points for drawing
   */
  calculatesDimensionPoints: (
    planView: PlanViewDefinition,
    articleView: SvgArticleView2D,
    labelDistance: number
  ) => DimensionPoints;

  /**
   * Checks if an article is positioned close to a wall segment.
   * Useful for determining which articles belong to which elevation view.
   * 
   * @param article - The article to check
   * @param wallSegment - The wall segment
   * @param distance - Maximum distance (mm) to consider as "close"
   * @returns True if article is within the specified distance of the wall
   */
  isArticleCloseToWall: (
    article: Article3D,
    wallSegment: WallSegment,
    distance: number
  ) => boolean;

  /**
   * Draws a dimension line with measurement text on an SVG element.
   * 
   * @param svgElement - SVG element to draw on
   * @param fromPoint - Start point of dimension
   * @param toPoint - End point of dimension
   * @param labelDistance - Distance of dimension line from measured object
   * @param fontSize - Font size for dimension text
   * @param dimUnitText - Unit text to append (e.g., "mm")
   * @param planToSvgScale - Scale factor for accurate measurements
   * @param color - Color of dimension line and text
   */
  drawDimension: (
    svgElement: SVGElement,
    fromPoint: Vector3,
    toPoint: Vector3,
    labelDistance: number,
    fontSize: number,
    dimUnitText?: string,
    planToSvgScale?: number,
    color?: string
  ) => void;

  /**
   * Draws a polygon from an array of points on an SVG element.
   * 
   * @param svgElement - SVG element to draw on
   * @param svgPoints - Array of points defining the polygon
   * @param closed - Whether to close the polygon (connect last point to first)
   * @param color - Stroke color
   * @param strokeWidth - Width of the stroke
   */
  drawPolygonFromPoints: (
    svgElement: SVGElement,
    svgPoints: Vector3[],
    closed?: boolean,
    color?: string,
    strokeWidth?: number
  ) => void;

  /**
   * Generates an optimized SVG output file from SVG XML.
   * This function creates the final SVG file for floor plans and elevation views.
   * 
   * @param name - Name for the output file (without extension)
   * @param svgXml - SVG content as XML string
   * @returns Promise resolving to an output file entry
   */
  generateOptimizedSvgOutput: (
    name: string,
    svgXml: string
  ) => Promise<IOutputFileEntry>;

  /**
   * Generates a GLB (3D model) file from the room scene.
   * This is for DEBUG purposes only, not for production use.
   * 
   * @param name - Name for the output file (without extension)
   * @param drawinge2D - The room drawing object
   * @returns Promise resolving to an output file entry, or null if generation fails
   */
  glbFromScene: (
    name: string,
    drawinge2D: RoomDrawing2D
  ) => Promise<IOutputFileEntry | null>;
}
```

### Usage Example

The following example demonstrates a complete workflow for generating floor plans and elevation views from order data.

The script begins by calling `newRoomDrawing2D()`, which is essential as it initializes the drawing system and creates a 3D scene from the order data. The configuration options specify rendering details such as wireframe display, surface rendering, and colors for both furniture parts and walls.

After initialization, the script defines a part filter to exclude drilling operations from the views. It then creates a floor plan view by defining the view frustum boundaries based on the scene's bounding box, with appropriate margins.

For elevation views, the script iterates through each wall segment and identifies which articles (furniture items) are positioned close to that wall using `isArticleCloseToWall()`. For each wall with adjacent articles, it creates a dedicated elevation view with appropriate filters to show only relevant walls and articles.

Once all view definitions are prepared, the script calls `generateSvgViews()` to render the SVG elements. The example then enhances these SVGs by adding red debug polygons around each article and blue dimension lines showing measurements in millimeters.

Finally, the script uses `generateOptimizedSvgOutput()` to create the final optimized SVG files for all floor plans and elevation views, which are added to the result map. Additionally, `glbFromScene()` is called to generate a 3D GLB file - note that this is for debugging purposes only and is not intended for production use.

```typescript
async function output_RoomDrawings(this:CustomOrderOutputoutput_RoomDrawings, drawingApi:DrawingApi, result:Map<string,BomOutputFileEntry>, o: IOrderData, ol: IFullOrderLineGroupData[]): void {

  // create RoomDrawing2D from order data
  const roomDrawing2DOptions: RoomDrawing2DOptions = {
    sceneMargin: 300,
    svgOriginalSceneSize: false,
    svgSize: 1024,
    room3d: {
      part: {
        showOpen: false,
        showDocking: false,
        transparentParts: false,
        wireFrame: true,
        surface: true,
        keepMeshMaterials: true,
        surfaceColor: 0xd0d0d0,
        meshColorScale: 0.5,
      },
      wall: {
        wireFrame: true,
        surface: true,
        wallColor: 0xa0a0a0,
      },
    },
  };
  const order = {
    orderData: o,
    fullOrderLineGroups: ol,
  };
  const drawing2d = await drawingApi.newRoomDrawing2D(
    order,
    roomDrawing2DOptions
  );

  const planViewDefinitions: PlanViewDefinition[] = [];
  const partFilter: PartFilter = (part: I3DElement, _bomOrderLine?: IBomOrderLineData) => {
    return !part._id?.startsWith('Drilling');
  };
  const boxOfScene = drawing2d.sceneBox;

  // add floor plan view
  const floorPlanView: PlanViewDefinition = {
    name: 'floor-plan',
    type: PlanViewType.FloorPlan,
    partFilter,
    left: boxOfScene.min._x - 300,
    right: boxOfScene.max._x + 300,
    top: -boxOfScene.min._z + 300,
    bottom: -boxOfScene.max._z - 300,
    near: -boxOfScene.max._y - 100,
    far: -boxOfScene.min._y + 100,
  };
  planViewDefinitions.push(floorPlanView);

  // generate elevation views
  for (const wall of drawing2d.walls) {
    const articlesAtWall: Article3D[] = [];
    for (const article of drawing2d.articles) {
      if (drawingApi.isArticleCloseToWall(article, wall, 300)) {
        articlesAtWall.push(article);
      }
    }
    if (articlesAtWall.length === 0) {
      continue;
    }
    const orderLines = articlesAtWall.map((a) => a.orderLine);
    const wallFilter: WallFilter = (wallSegment: WallSegment): boolean => {
      return wallSegment.wallSegmentId === wall.wallSegmentId;
    };
    const orderLineFilter: ArticleFilter = (
      bomOrderLine: IBomOrderLineData
    ): boolean => {
      return orderLines.includes(bomOrderLine);
    };
    const elevationView: PlanViewDefinition = {
      name: `elevation-${wall.wallSegmentId}`,
      elevationDirection: wall.directionToWall,
      type: PlanViewType.Elevation,
      wallFilter,
      orderLineFilter,
      partFilter,
      left: wall.left - 300,
      right: wall.right + 300,
      top: boxOfScene.max._y + 300,
      bottom: boxOfScene.min._y - 300,
      near: wall.distanceToWall - 1500,
      far: wall.distanceToWall + 300,
    };
    planViewDefinitions.push(elevationView);
  }

  // generate the SVGs
  const svgViewOutputs = await drawing2d.generateSvgViews(planViewDefinitions);

  // add article DEBUG frames to SVGs
  for (const svgViewOutput of svgViewOutputs) {
    for (const articleView of svgViewOutput.articleViews) {
      if (articleView.polygonPoints.length === 0) {
        continue;
      }
      drawingApi.drawPolygonFromPoints(
        svgViewOutput.svgElement,
        articleView.polygonPoints,
        true,
        'red',
        3
      );
    }
  }

  // add dimensions to SVGs
  for (const svgViewOutput of svgViewOutputs) {
    for (const articleView of svgViewOutput.articleViews) {
      if (articleView.polygonPoints.length === 0) {
        continue;
      }
      const { fromPoint, toPoint, labelDistance } =
        drawingApi.calculatesDimensionPoints(
          svgViewOutput.planView,
          articleView,
          200 * svgViewOutput.planToSvgScale
        );
      drawingApi.drawDimension(
        svgViewOutput.svgElement,
        fromPoint,
        toPoint,
        labelDistance,
        100 * svgViewOutput.planToSvgScale,
        'mm',
        svgViewOutput.planToSvgScale,
        'blue'
      );
    }
  }

  // add SVGs to result
  for (const svgOutput of svgViewOutputs) {
    const svgPlanView = await drawingApi.generateOptimizedSvgOutput(
      svgOutput.planView.name,
      svgOutput.svgElement.outerHTML
    );
    result.set((await svgPlanView).fileName, svgPlanView);
  }

  // generate DEBUG GLB from 3D scene and add to result
  const debugGlb = await drawingApi.glbFromScene('room-scene', drawing2d);
  if (debugGlb) {
    result.set(debugGlb.fileName, debugGlb);
  }
}
```
