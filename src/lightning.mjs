import lng from "wpe-lightning/src/lightning.mjs";
import NodePlatform from "./platforms/node/NodePlatform.mjs"

const lightning = lng;

lightning.Stage.platform = NodePlatform;

export default lightning;