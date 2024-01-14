import {
  ActionIcon,
  Code,
  CopyButton,
  Group,
  Text,
  Tooltip,
} from "@mantine/core"
import { IconCheck, IconCopy } from "@tabler/icons-react"

export const SuperCopyButton = ({ value }) => (
  <CopyButton value={value} timeout={2000}>
    {({ copied, copy }) => (
      <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
        <ActionIcon
          color={copied ? "teal" : "gray"}
          variant="transparent"
          onClick={copy}
        >
          {copied ? <IconCheck size="16px" /> : <IconCopy size="16px" />}
        </ActionIcon>
      </Tooltip>
    )}
  </CopyButton>
)

export default function CopyText({ c = "violet.8", value }) {
  return (
    <Group gap={0} display="inline-flex">
      <Code ml={5} c={c}>
        {value}
      </Code>
      <SuperCopyButton value={value} />
    </Group>
  )
}