export type Props = {
  url: string
  name?: string
  bnw: boolean
}

let siteName = 'telegram'
let siteURL = 'telegram.org'
let defaulthover = 'Join Telegram Group'

let stringsToReplace: string[] = [
  'http://',
  'https://',
  'http:',
  'https:',
  'www.',
  siteURL,
  'telegram.me',
  't.org',
  't.me',
  '/',
  'joinchat/',
]

export default class SMedia_Link implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const link = new Entity()
    link.setParent(host)

    if (props.bnw) {
      link.addComponent(new GLTFShape('06b8b306-1e07-4085-b7ea-4b246e4fbf5a/models/telegram_bnw.glb'))
    } else {
      link.addComponent(new GLTFShape('06b8b306-1e07-4085-b7ea-4b246e4fbf5a/models/telegram.glb'))
    }
    let url = parseURL(props.url)

    let locationString = props.name ? props.name : defaulthover

    link.addComponent(
      new OnPointerDown(
        async function () {
          openExternalURL(url)
        },
        {
          button: ActionButton.PRIMARY,
          hoverText: locationString,
        }
      )
    )
  }
}

export function parseURL(url: string) {
  let newURL = url.trim()

  for (let str of stringsToReplace) {
    if (newURL.substr(0, str.length) == str) {
      newURL = newURL.substring(str.length).trim()
    }
  }

  let finalURL = 'https://www.' + siteURL + '/' + newURL

  return finalURL
}
