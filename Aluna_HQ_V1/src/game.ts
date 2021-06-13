import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/src/item"
import Script2 from "../b8755ec2-a4a1-4b3d-be0a-db5a2185d3b7/src/item"
import Script3 from "../3e3df11c-8e39-4494-ac4e-d6faab495f13/src/item"
import Script4 from "../8dcc2ca4-5e30-4488-9731-be24f0c041fd/src/item"
import Script5 from "../9a0c9732-f45c-4836-a524-e32f786787f7/src/item"
import Script6 from "../4adfea35-fb5c-4f64-bb5e-c7ebfa350868/src/item"
import Script7 from "../76d3a347-02b1-4c74-bbf3-7787ede6a3b1/src/item"
import Script8 from "../89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/src/item"
import Script9 from "../89375bda-dab8-49b5-bb44-6d94bab2d1b4/src/item"
import Script10 from "../b53e3bde-9d22-4098-8707-29a685d25a3b/src/item"
import Script11 from "../06b8b306-1e07-4085-b7ea-4b246e4fbf5a/src/item"
import Script12 from "../645d2a2b-266d-4872-9368-562ca4a81139/src/item"
import Script13 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script14 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const domeGreenhouse = new Entity('domeGreenhouse')
engine.addEntity(domeGreenhouse)
domeGreenhouse.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(8, 3.5762786865234375e-7, 8),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.500000238418579, 1.5, 1.500000238418579)
})
domeGreenhouse.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/GreenHouse_01/GreenHouse_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
domeGreenhouse.addComponentOrReplace(gltfShape)

const tieredDesk = new Entity('tieredDesk')
engine.addEntity(tieredDesk)
tieredDesk.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(12.999999046325684, 0.0000011920928955078125, 8),
  rotation: new Quaternion(-3.456862583456257e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000007152557373, 1, 1.0000003576278687)
})
tieredDesk.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/Desk_01/Desk_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
tieredDesk.addComponentOrReplace(gltfShape2)

const spaceshipChair = new Entity('spaceshipChair')
engine.addEntity(spaceshipChair)
spaceshipChair.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(11, 9.5367431640625e-7, 8),
  rotation: new Quaternion(1.9244804555019254e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
spaceshipChair.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/ChairShip_01/ChairShip_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
spaceshipChair.addComponentOrReplace(gltfShape3)

const imageScreen = new Entity('imageScreen')
engine.addEntity(imageScreen)
imageScreen.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(13, 1.000001072883606, 7),
  rotation: new Quaternion(-3.456862583456257e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.25499996542930603, 0.2549999952316284, 0.0010000007459893823)
})
imageScreen.addComponentOrReplace(transform5)

const imageScreen2 = new Entity('imageScreen2')
engine.addEntity(imageScreen2)
imageScreen2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(13, 1.0000011920928955, 8.999999046325684),
  rotation: new Quaternion(-3.456862583456257e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.25499996542930603, 0.2549999952316284, 0.0010000007459893823)
})
imageScreen2.addComponentOrReplace(transform6)

const keyboard = new Entity('keyboard')
engine.addEntity(keyboard)
keyboard.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(12.5, 0.9999999403953552, 8),
  rotation: new Quaternion(4.755615660382434e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
keyboard.addComponentOrReplace(transform7)

const atomicLight = new Entity('atomicLight')
engine.addEntity(atomicLight)
atomicLight.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(8, 2.500000476837158, 8),
  rotation: new Quaternion(-6.697348059437561e-15, -0.9951847195625305, 1.1863525628541538e-7, -0.0980171412229538),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
atomicLight.addComponentOrReplace(transform8)

const tieredDesk4 = new Entity('tieredDesk4')
engine.addEntity(tieredDesk4)
tieredDesk4.setParent(_scene)
tieredDesk4.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(8.000000953674316, 2.980232238769531e-7, 12.75),
  rotation: new Quaternion(-1.196032120863227e-15, -1, 1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.999999761581421, 1, 1)
})
tieredDesk4.addComponentOrReplace(transform9)

const discordLink = new Entity('discordLink')
engine.addEntity(discordLink)
discordLink.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(8, 1.000000238418579, 12.25),
  rotation: new Quaternion(-2.356680287387853e-15, 1, -1.1920928955078125e-7, -9.76795795132402e-22),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
discordLink.addComponentOrReplace(transform10)

const githubLink = new Entity('githubLink')
engine.addEntity(githubLink)
githubLink.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(10, 1.0000004768371582, 12.250000953674316),
  rotation: new Quaternion(-2.356680287387853e-15, 1, -1.1920928955078125e-7, -9.76795795132402e-22),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
githubLink.addComponentOrReplace(transform11)

const mixtable = new Entity('mixtable')
engine.addEntity(mixtable)
mixtable.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(8, 4.76837158203125e-7, 3.5),
  rotation: new Quaternion(8.38937853377391e-15, 0, -1.3830625013311337e-15, -1),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
mixtable.addComponentOrReplace(transform12)

const greenButton = new Entity('greenButton')
engine.addEntity(greenButton)
greenButton.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(1.499999761581421, 0.9999988675117493, 1.0000001192092896),
  rotation: new Quaternion(-4.584851277117125e-15, -0.7730104923248291, 9.215003160534252e-8, 0.6343933343887329),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
greenButton.addComponentOrReplace(transform13)

const redButton = new Entity('redButton')
engine.addEntity(redButton)
redButton.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(1.5, 0.9999988079071045, 2.000000238418579),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
redButton.addComponentOrReplace(transform14)

const signpostDirections = new Entity('signpostDirections')
engine.addEntity(signpostDirections)
signpostDirections.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(1.5, 2.384185791015625e-7, 14.5),
  rotation: new Quaternion(-1.1818363568870133e-14, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.249999761581421, 2.25, 1.499999761581421)
})
signpostDirections.addComponentOrReplace(transform15)

const twitterLink2 = new Entity('twitterLink2')
engine.addEntity(twitterLink2)
twitterLink2.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(6, 0.9999999403953552, 12.25),
  rotation: new Quaternion(-2.356680287387853e-15, 1, -1.1920928955078125e-7, -9.76795795132402e-22),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
twitterLink2.addComponentOrReplace(transform16)

const telegramLink2 = new Entity('telegramLink2')
engine.addEntity(telegramLink2)
telegramLink2.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(7, 0.9999999403953552, 12.25),
  rotation: new Quaternion(-2.356680287387853e-15, 1, -1.1920928955078125e-7, -9.76795795132402e-22),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
telegramLink2.addComponentOrReplace(transform17)

const youtubeLink2 = new Entity('youtubeLink2')
engine.addEntity(youtubeLink2)
youtubeLink2.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(9, 1.000000238418579, 12.25),
  rotation: new Quaternion(-2.356680287387853e-15, 1, -1.1920928955078125e-7, -9.76795795132402e-22),
  scale: new Vector3(1.0000032186508179, 1, 1.0000032186508179)
})
youtubeLink2.addComponentOrReplace(transform18)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(2, 0.9999988079071045, 1.5),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(2.000000238418579, 2, 1.0000001192092896)
})
externalLink.addComponentOrReplace(transform19)

const tieredDesk2 = new Entity('tieredDesk2')
engine.addEntity(tieredDesk2)
tieredDesk2.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(1.9999998807907104, 0, 1.5000001192092896),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
tieredDesk2.addComponentOrReplace(transform20)
tieredDesk2.addComponentOrReplace(gltfShape2)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(8, 8, 8),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(12.000005722045898, 11.25, 1.0000001192092896)
})
nftPictureFrame.addComponentOrReplace(transform21)

const orangeSpaceship = new Entity('orangeSpaceship')
engine.addEntity(orangeSpaceship)
orangeSpaceship.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(2.500000238418579, 2.5, 1.499999761581421),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.24500006437301636, 0.24500000476837158, 0.24500006437301636)
})
orangeSpaceship.addComponentOrReplace(transform22)
const gltfShape4 = new GLTFShape("models/SpaceShip_03/SpaceShip_03.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
orangeSpaceship.addComponentOrReplace(gltfShape4)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape5 = new GLTFShape("models/GroundFloorSciFi_04/GroundFloorSciFi_04.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
entity.addComponentOrReplace(gltfShape5)
const transform23 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform23)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script1.spawn(imageScreen, {"image":"https://i.imgur.com/uXfjMFE.png"}, createChannel(channelId, imageScreen, channelBus))
script1.spawn(imageScreen2, {"image":"https://i.imgur.com/XWjAGaO.png"}, createChannel(channelId, imageScreen2, channelBus))
script2.spawn(keyboard, {"onClick":[]}, createChannel(channelId, keyboard, channelBus))
script3.spawn(atomicLight, {"startOn":true,"clickable":true}, createChannel(channelId, atomicLight, channelBus))
script4.spawn(discordLink, {"url":"channels/732260594912067584/","bnw":false}, createChannel(channelId, discordLink, channelBus))
script5.spawn(githubLink, {"url":"alunacrypto","bnw":false}, createChannel(channelId, githubLink, channelBus))
script6.spawn(mixtable, {"onActivate":[],"onDeactivate":[]}, createChannel(channelId, mixtable, channelBus))
script7.spawn(greenButton, {"onClick":[]}, createChannel(channelId, greenButton, channelBus))
script8.spawn(redButton, {"onClick":[]}, createChannel(channelId, redButton, channelBus))
script9.spawn(signpostDirections, {"textTop":"ALUNA HQ","textLower":"FARM","fontSize":22.5}, createChannel(channelId, signpostDirections, channelBus))
script10.spawn(twitterLink2, {"url":"alunasocial","bnw":false}, createChannel(channelId, twitterLink2, channelBus))
script11.spawn(telegramLink2, {"url":"alunasocial","bnw":false}, createChannel(channelId, telegramLink2, channelBus))
script12.spawn(youtubeLink2, {"url":"UCYBt4Skw5m2z7CM4LdAMREw","bnw":false}, createChannel(channelId, youtubeLink2, channelBus))
script13.spawn(externalLink, {"url":"aluna.social","name":"Try Aluna"}, createChannel(channelId, externalLink, channelBus))
script14.spawn(nftPictureFrame, {"id":"136677","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Classic","color":"#FFFFFF","ui":true,"uiText":"Man On The Moon"}, createChannel(channelId, nftPictureFrame, channelBus))

// https://docs.decentraland.org/development-guide/video-playing/
// #1 Create a VideoClip object, either referencing a streaming URL or a path to a video file.
const myVideoClip = new VideoClip(
  "videos/aluna.mp4"
)

// #2 Create a VideoTexture object, and assign the VideoClip to it.
const myVideoTexture = new VideoTexture(myVideoClip)

// #3 Create a Material or BasicMaterial, and set its albedoTexture or texture to the VideoTexture you created.
const myMaterial = new BasicMaterial()
myMaterial.texture = myVideoTexture

// #4 Then add that Material to an entity that has a primitive shape, like a PlaneShape or a BoxShape.
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(11.45, 3.75, 8),
    rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
    scale: new Vector3(4.6, 2.6, 1)
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen)

// #5 Play the video texture
myVideoTexture.playing = true
myVideoTexture.loop = true