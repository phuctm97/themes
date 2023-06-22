'use client';

import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Provider,
  Separator,
  Strong,
  Switch,
  Text,
  TextField,
} from '@radix-ui/themes';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  Cross2Icon,
  DotsHorizontalIcon,
  DrawingPinFilledIcon,
  DrawingPinIcon,
  OpenInNewWindowIcon,
  PlusIcon,
  Share2Icon,
} from '@radix-ui/react-icons';
import { Card } from './card';
import { allPeople, email } from './people';

export default function Homepage() {
  return (
    <html
      lang="en"
      className="dark-theme"
      data-color-scale="indigo"
      data-gray-scale="natural"
      data-background-feel="natural"
      data-foreground-feel="tinted"
      data-button-radius="large"
      data-scaling="regular"
    >
      <body className="rui-reset-body ">
        <div id="root">
          <Provider>
            <Flex direction="column" style={{ minHeight: '100vh' }}>
              <Flex
                style={{
                  flexShrink: 0,
                  alignItems: 'center',
                  padding: 24,
                  color: 'var(--slate12)',
                  gap: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="currentcolor"
                >
                  <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" />
                  <path d="M12 0H4V8H12V0Z" />
                  <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
                </svg>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    fontFamily: 'Untitled Sans, sans-serif',
                    letterSpacing: '-0.06em',
                  }}
                >
                  Radix Themes
                </span>
              </Flex>

              <Flex
                style={{
                  fontSize: 'max(0.4px, min(1px, calc(100vw / 2000), calc(100vh / 1000)))',
                  gap: '32em',
                  flexGrow: 1,
                  flexShrink: 0,
                  alignItems: 'center',
                }}
              >
                <Flex
                  style={{
                    // outline: '1px solid',
                    maxWidth: '800em',
                    padding: 'max(min(100em, 2vw), 25px)',
                  }}
                >
                  <div>
                    <h1
                      style={{
                        fontSize: '280em',
                        fontWeight: 500,
                        fontFamily: 'Untitled Sans, sans-serif',
                        letterSpacing: '-0.07em',
                        lineHeight: 0.8,
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: '-0.075em',
                        backgroundImage:
                          'linear-gradient(180deg, #6599FF 0%, #B8ADEE 63.54%, #ABA9FC 83.85%, #E787FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Build
                      <br />
                      faster
                    </h1>
                    <div style={{ fontSize: 'max(1em, 0.75px)' }}>
                      <p
                        style={{
                          fontSize: '30em',
                          fontWeight: 500,
                          fontFamily: 'Untitled Sans, sans-serif',
                          letterSpacing: '-0.03em',
                          lineHeight: 1.4,
                        }}
                      >
                        Configurable component library from the Radix team. Move quickly with a
                        suite of beautiful, high-quality components and smooth DX.
                      </p>
                      <a
                        href="#"
                        style={{
                          alignItems: 'center',
                          display: 'inline-flex',
                          gap: '1em',
                          backgroundColor: 'var(--foreground-feel)',
                          height: '3em',
                          fontSize: '20em',
                          fontWeight: 500,
                          fontFamily: 'Untitled Sans, sans-serif',
                          paddingLeft: '1.25em',
                          paddingRight: '1.25em',
                          marginBottom: 'calc(3em + 2vh)',
                          textDecoration: 'none',
                          color: 'var(--background-feel)',
                          borderRadius: '0.5em',
                          userSelect: 'none',
                        }}
                      >
                        Get started{' '}
                        <span
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            marginLeft: '-0.3em',
                            marginRight: '-0.3em',
                          }}
                        >
                          {'->'}
                        </span>
                      </a>
                    </div>
                  </div>
                </Flex>

                <div
                  style={{
                    position: 'relative',
                    // pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                  aria-hidden
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: -9999,
                      zIndex: -1,
                      backgroundColor: 'var(--',
                      backgroundImage: 'radial-gradient(var(--grayA6) 6%, transparent 10%)',
                      backgroundPosition: '7px 7px',
                      backgroundSize: '16px 16px',
                    }}
                  />

                  <DemoAppDashboard />
                </div>
              </Flex>
            </Flex>
          </Provider>
        </div>
      </body>
    </html>
  );
}

const DemoAppDashboard = () => (
  <Flex align="center" gap="6">
    <Flex gap="6" direction="column" style={{ width: 640 }}>
      <Card size="4" style={{ height: 464 }}>
        <Box height="7">
          <Heading size="6" mt="-1">
            Pricing
          </Heading>
        </Box>

        <Text size="2" mb="5" color="gray">
          No credit card required. Every plan includes a 30-day trial of all Pro features.
        </Text>

        <Grid columns="3" gap="6">
          <Flex direction="column">
            <Heading size="5" mb="1">
              Basic
            </Heading>
            <Text color="gray" size="2" mb="4">
              3 team members
            </Text>
            <Heading size="5" mb="4">
              $0
              <Text size="5" weight="bold" asChild style={{ color: 'var(--mono8)' }}>
                <span> / mo</span>
              </Text>
            </Heading>

            <Flex direction="column" gap="2">
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Expense tracking</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Invoicing</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Payment tracking</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Transaction recording</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Basic reports</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Email support</Text>
              </Flex>
              <Button mt="3" variant="surface">
                Downgrade
              </Button>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Heading size="5" mb="1">
              Growth
            </Heading>
            <Text color="gray" size="2" mb="4">
              10 team members
            </Text>
            <Heading size="5" mb="4">
              $49
              <Text size="5" weight="bold" asChild style={{ color: 'var(--mono8)' }}>
                <span> / mo</span>
              </Text>
            </Heading>

            <Flex direction="column" gap="2">
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Online payments</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Recurring invoices</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Bill management</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Inventory tracking</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Detailed reports</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Phone support</Text>
              </Flex>
              <Button mt="3" variant="surface">
                Go to Billing
              </Button>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Heading size="5" mb="1">
              Pro
            </Heading>
            <Text color="gray" size="2" mb="4">
              Unlimited team members
            </Text>
            <Heading size="5" mb="4">
              $99
              <Text size="5" weight="bold" asChild style={{ color: 'var(--mono8)' }}>
                <span> / mo</span>
              </Text>
            </Heading>

            <Flex direction="column" gap="2">
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Custom invoices</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Multi-business</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Team collaboration</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">App integrations</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Advanced security</Text>
              </Flex>
              <Flex gap="2" align="center">
                <Marker>
                  <CheckIcon width="14" height="14" />
                </Marker>
                <Text size="2">Priority support</Text>
              </Flex>
              <Button mt="3">Upgrade</Button>
            </Flex>
          </Flex>
        </Grid>
      </Card>

      <Card size="4">
        <Box height="7">
          <Heading size="6" mt="-1">
            Your team
          </Heading>
        </Box>

        <Text size="2" mb="5" color="gray">
          Invite and manage your team members.
        </Text>

        <Flex gap="3" mb="5">
          <TextField size="2" placeholder="Email address" style={{ flexShrink: 1 }} />
          <Button size="2" color="indigo">
            Invite
          </Button>
        </Flex>

        <Flex direction="column">
          {getRandomIndices(5, 29).map((number, i) => (
            <Box key={number}>
              <Flex gap="4" align="center">
                <Flex gap="3" align="center" style={{ width: 200, whiteSpace: 'nowrap' }}>
                  <Avatar src={allPeople[number]?.image} />
                  <Link size="2">{allPeople[number]?.name}</Link>
                </Flex>
                <Text size="2" color="gray">
                  {email(allPeople[number]?.name)}
                </Text>
                <Flex grow="1" justify="end">
                  <IconButton variant="ghost">
                    <DotsHorizontalIcon width="16" height="16" />
                  </IconButton>
                </Flex>
              </Flex>

              {i !== 4 && (
                <Box style={{ marginTop: -1 }}>
                  <Separator size="4" my="3" />
                </Box>
              )}
            </Box>
          ))}
        </Flex>
      </Card>

      <Card size="4">
        <Box height="7">
          <Heading size="6" mt="-1">
            Notifications
          </Heading>
        </Box>

        <Text size="2" mb="6" color="gray">
          Manage your notification settings.
        </Text>

        <Box style={{ marginTop: -1 }}>
          <Separator size="4" my="5" />
        </Box>

        <Flex direction="column">
          <Flex gap="9" align="start" justify="between">
            <Box>
              <Text size="3" weight="bold" mb="1">
                Comments
              </Text>
              <Text size="2" color="gray">
                Receive notifications when someone comments on your documents or mentions you.
              </Text>
            </Box>
            <Flex direction="column" gap="4" data-button-radius="full" mt="1">
              <Flex align="center" gap="2">
                <Switch defaultChecked />
                <Text size="2" weight="bold">
                  Push
                </Text>
              </Flex>

              <Flex align="center" gap="2">
                <Switch defaultChecked />
                <Text size="2" weight="bold">
                  Email
                </Text>
              </Flex>

              <Flex align="center" gap="2">
                <Switch />
                <Text size="2" weight="bold">
                  Slack
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" my="5" />
          </Box>

          <Flex gap="9" align="start" justify="between">
            <Box>
              <Text size="3" weight="bold" mb="1">
                Favorites
              </Text>
              <Text size="2" color="gray">
                Receive notifications when there is activity related to your favorited items.
              </Text>
            </Box>
            <Flex direction="column" gap="4" data-button-radius="full" mt="1">
              <Flex align="center" gap="2">
                <Switch defaultChecked />
                <Text size="2" weight="bold">
                  Push
                </Text>
              </Flex>

              <Flex align="center" gap="2">
                <Switch />
                <Text size="2" weight="bold">
                  Email
                </Text>
              </Flex>

              <Flex align="center" gap="2">
                <Switch defaultChecked />
                <Text size="2" weight="bold">
                  Slack
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" my="5" />
          </Box>

          <Flex gap="9" align="start" justify="between">
            <Box>
              <Text size="3" weight="bold" mb="1">
                New documents
              </Text>
              <Text size="2" color="gray">
                Receive notifications whenever people on your team create new documents.
              </Text>
            </Box>
            <Flex direction="column" gap="4" data-button-radius="full" mt="1">
              <Flex align="center" gap="2">
                <Switch defaultChecked />
                <Text size="2" weight="bold">
                  Push
                </Text>
              </Flex>

              <Flex align="center" gap="2">
                <Switch defaultChecked />
                <Text size="2" weight="bold">
                  Email
                </Text>
              </Flex>

              <Flex align="center" gap="2">
                <Switch defaultChecked={false} />
                <Text size="2" weight="bold">
                  Slack
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>

    <Flex gap="6" direction="column" style={{ width: 400 }}>
      <Card size="4" style={{ height: 320 }}>
        <Box height="7" mb="4">
          <Heading size="6" mt="-1">
            Sign up
          </Heading>
        </Box>

        <Box mb="5">
          <Text size="2" weight="bold" mb="2">
            Email address
          </Text>
          <TextField placeholder="Enter your email" />
        </Box>

        <Box mb="5">
          <Flex justify="between" mb="2">
            <Text size="2" weight="bold">
              Password
            </Text>
            <Link size="2">Forgot password?</Link>
          </Flex>
          <TextField placeholder="Enter your password" />
        </Box>

        <Flex mt="6" justify="end" gap="3">
          <Button variant="surface">Create an account</Button>
          <Button>Sign in</Button>
        </Flex>
      </Card>

      <Card size="4">
        <Box position="absolute" top="0" right="0" m="2">
          <IconButton variant="ghost-mono">
            <Cross2Icon width="20" height="20" />
          </IconButton>
        </Box>

        <Box height="7">
          <Heading size="6" mt="-1">
            Your company card
          </Heading>
        </Box>

        <Text size="2" mb="6" color="gray">
          View and manage your corporate card.
        </Text>

        <Box
          p="6"
          style={{
            backgroundColor: 'var(--color3)',
            borderRadius: 'var(--brs-4)',
            // boxShadow: 'inset 0 1px 1px #7971E930, inset 0 0 3px #7971E920',
          }}
        >
          <Flex
            direction="column"
            justify="between"
            style={{
              height: 168,
              color: 'white',
              background: 'linear-gradient(to top right, var(--color9), #E18BFF)',
              boxShadow: '0 1px 20px -5px #7971E9AA',
              borderRadius: 'var(--brs-3)',
            }}
          >
            <Text mt="3" ml="3" size="2">
              Sophie Johnson
            </Text>
            <Box>
              <Text mb="1" ml="3" size="2">
                4929 3849 5027 1846
              </Text>
              <Flex gap="3" mb="2" ml="3">
                <Text size="2">01 / 27</Text>
                <Text size="2">999</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Flex mt="6" justify="end" gap="3">
          <Button variant="outline" color="red">
            Freeze
          </Button>
          <Button>Done</Button>
        </Flex>
      </Card>

      <Card size="4">
        <Box position="absolute" top="0" right="0" m="2">
          <IconButton variant="ghost-mono">
            <Cross2Icon width="20" height="20" />
          </IconButton>
        </Box>

        <Box height="7" mb="4">
          <Heading size="6" mt="-1">
            Invoice <Link weight="bold">#3463</Link>
          </Heading>
        </Box>

        <Grid columns="2" gapX="4" gapY="5">
          <Box>
            <Text size="2" mb="1" color="gray">
              Issued
            </Text>
            <Text size="3" weight="bold">
              June 21, 2023
            </Text>
          </Box>

          <Box>
            <Text size="2" mb="1" color="gray">
              Due
            </Text>
            <Text size="3" weight="bold">
              July 21, 2023
            </Text>
          </Box>

          <Box>
            <Text size="2" mb="1" color="gray">
              To
            </Text>
            <Text size="3" mb="1" weight="bold">
              Paradise Ventures
            </Text>
            <Text size="2">742 Evergreen Terrace, Springfield, IL 62704</Text>
          </Box>

          <Box>
            <Text size="2" mb="1" color="gray">
              From
            </Text>
            <Text size="3" mb="1" weight="bold">
              Rogue Widgets
            </Text>
            <Text size="2">1600 Baker Street NW, Washington, DC 20500</Text>
          </Box>

          <Flex direction="column" gap="1" style={{ gridColumn: '1 / -1' }}>
            <Flex justify="between">
              <Text size="2" mb="1" color="gray">
                Services
              </Text>
              <Text size="2" mb="1" color="gray">
                Price
              </Text>
            </Flex>
            <Flex justify="between">
              <Text size="3" mb="1" weight="bold">
                Branding
              </Text>
              <Text size="2">$20,000</Text>
            </Flex>
            <Flex justify="between">
              <Text size="3" mb="1" weight="bold">
                Marketing website
              </Text>
              <Text size="2">$17,500</Text>
            </Flex>
            <Box style={{ marginTop: -1 }}>
              <Separator size="4" mt="1" mb="2" />
            </Box>
            <Flex justify="between">
              <Text size="2">Total</Text>
              <Text size="2">$38,500</Text>
            </Flex>
          </Flex>
        </Grid>

        <Flex mt="6" justify="end" gap="3">
          <Button variant="outline" color="red">
            Reject
          </Button>
          <Button>Approve</Button>
        </Flex>
      </Card>

      <Card size="4">
        <Box position="absolute" top="0" right="0" m="2">
          <IconButton variant="ghost-mono">
            <Cross2Icon width="20" height="20" />
          </IconButton>
        </Box>

        <Flex gap="2" direction="column" align="center">
          <Marker height="8" width="8">
            <CheckIcon width="32" height="32" />
          </Marker>

          <Heading size="6" mb="4">
            Invoice paid
          </Heading>
        </Flex>

        <Text size="3" align="center" mb="5">
          You paid $17,975.30. We sent a receipt to <Strong>joe.wilson@example.com</Strong>
        </Text>

        <Button mb="3" variant="surface" style={{ width: '100%' }}>
          Done
        </Button>

        <Button style={{ width: '100%' }}>Next invoice</Button>
      </Card>
    </Flex>

    <Flex gap="6" direction="column" style={{ width: 560 }}>
      <Card size="4">
        <Box height="7">
          <Heading size="6" mt="-1">
            To-do
          </Heading>
        </Box>

        <Flex gap="1" position="absolute" top="0" right="0" m="2">
          <IconButton variant="ghost-mono">
            <Share2Icon width="20" height="20" />
          </IconButton>
          <IconButton variant="ghost-mono">
            <PlusIcon width="20" height="20" />
          </IconButton>
        </Flex>

        <Text size="2" mb="5" color="gray">
          Stay on top of your daily tasks.
        </Text>

        <Flex gap="2" direction="column">
          <Flex gap="2" align="center">
            <Checkbox />
            <Text size="2">
              Respond to comment <Link>#384</Link> from Travis Ross
            </Text>
          </Flex>

          <Flex gap="2" align="center">
            <Checkbox />
            <Text size="2">
              Invite <Link>Acme Co.</Link> team to Slack
            </Text>
          </Flex>

          <Flex gap="2" align="center">
            <Checkbox />
            <Text size="2">
              Create a report <Link>requested</Link> by Danilo Sousa
            </Text>
          </Flex>

          <Flex gap="2" align="center">
            <Checkbox />
            <Text size="2">
              Review support request <Link>#85</Link>
            </Text>
          </Flex>

          <Flex gap="2" align="center">
            <Checkbox defaultChecked />
            <Text size="2" color="gray" style={{ textDecorationLine: 'line-through' }}>
              Close Q2 finances
            </Text>
          </Flex>

          <Flex gap="2" align="center">
            <Checkbox defaultChecked />
            <Text size="2" color="gray" style={{ textDecorationLine: 'line-through' }}>
              Review invoice #3456
            </Text>
          </Flex>
        </Flex>
      </Card>

      <Card size="4">
        <Box height="7">
          <Heading size="6" mt="-1">
            Recent activity
          </Heading>
        </Box>

        <Flex gap="1" position="absolute" top="0" right="0" m="2">
          <IconButton variant="ghost-mono">
            <OpenInNewWindowIcon width="20" height="20" />
          </IconButton>
          <IconButton variant="subtle-mono">
            <DrawingPinFilledIcon width="20" height="20" />
          </IconButton>
        </Flex>

        <Text size="2" mb="6" color="gray">
          Review what has happened over the past days.
        </Text>

        <Flex direction="column">
          <Flex direction="column" gap="3" mb="5">
            <Flex justify="between" align="center">
              <Flex gap="2" align="center">
                <Avatar size="2" src={allPeople[6].image} />
                <Box>
                  <Text size="2" weight="bold">
                    {allPeople[6].name}
                  </Text>
                  <Text size="2" color="gray">
                    Approved invoice <Link>#3461</Link>
                  </Text>
                </Box>
              </Flex>

              <Text size="2" color="gray">
                June 21, 11:34 am
              </Text>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" />
          </Box>

          <Flex direction="column" gap="3" my="5">
            <Flex justify="between" align="center">
              <Flex gap="2" align="center">
                <Avatar size="2" src={allPeople[8].image} />
                <Box>
                  <Text size="2" weight="bold">
                    {allPeople[8].name}
                  </Text>
                  <Text size="2" color="gray">
                    Purchased <Link>15 office chairs</Link> and <Link>2 drum sets</Link>
                  </Text>
                </Box>
              </Flex>

              <Text size="2" color="gray">
                June 21, 9:39 am
              </Text>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" />
          </Box>

          <Flex direction="column" gap="3" my="5">
            <Flex justify="between" align="center">
              <Flex gap="2" align="center">
                <Avatar size="2" src={allPeople[8].image} />
                <Box>
                  <Text size="2" weight="bold">
                    {allPeople[8].name}
                  </Text>
                  <Text size="2" color="gray">
                    Responded to your comment <Link>#7514</Link>
                  </Text>
                </Box>
              </Flex>

              <Text size="2" color="gray">
                June 21, 9:41 am
              </Text>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" />
          </Box>

          <Flex direction="column" gap="3" my="5">
            <Flex justify="between" align="center">
              <Flex gap="2" align="center">
                <Avatar size="2" src={allPeople[28].image} />
                <Box>
                  <Text size="2" weight="bold">
                    {allPeople[28].name}
                  </Text>
                  <Text size="2" color="gray">
                    Created <Link>4 invoices</Link>
                  </Text>
                </Box>
              </Flex>

              <Text size="2" color="gray">
                June 20, 4:55 pm
              </Text>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" />
          </Box>

          <Flex direction="column" gap="3" my="5">
            <Flex justify="between" align="center">
              <Flex gap="2" align="center">
                <Avatar size="2" src={allPeople[26].image} />
                <Box>
                  <Text size="2" weight="bold">
                    {allPeople[26].name}
                  </Text>
                  <Text size="2" color="gray">
                    Updated client details for <Link>Acme Co.</Link>
                  </Text>
                </Box>
              </Flex>

              <Text size="2" color="gray">
                June 20, 3:30 pm
              </Text>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" />
          </Box>

          <Flex direction="column" gap="3" my="5">
            <Flex justify="between" align="center">
              <Flex gap="2" align="center">
                <Avatar size="2" src={allPeople[25].image} />
                <Box>
                  <Text size="2" weight="bold">
                    {allPeople[25].name}
                  </Text>
                  <Text size="2" color="gray">
                    Created <Link>a new report</Link>
                  </Text>
                </Box>
              </Flex>

              <Text size="2" color="gray">
                June 20, 3:22 pm
              </Text>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" />
          </Box>

          <Flex direction="column" gap="3" my="5">
            <Flex justify="between" align="center">
              <Flex gap="2" align="center">
                <Avatar size="2" src={allPeople[25].image} />
                <Box>
                  <Text size="2" weight="bold">
                    {allPeople[25].name}
                  </Text>
                  <Text size="2" color="gray">
                    Deleted report <Link>#34</Link>
                  </Text>
                </Box>
              </Flex>

              <Text size="2" color="gray">
                June 20, 1:00 pm
              </Text>
            </Flex>
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" />
          </Box>

          <Flex direction="column" gap="3" mt="5">
            <Flex justify="between" align="center">
              <Flex gap="2" align="center">
                <Avatar size="2" src={allPeople[20].image} />
                <Box>
                  <Text size="2" weight="bold">
                    {allPeople[20].name}
                  </Text>
                  <Text size="2" color="gray">
                    Joined the team
                  </Text>
                </Box>
              </Flex>

              <Text size="2" color="gray">
                June 20, 12:47 pm
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>

      <Card size="4">
        <Box height="7">
          <Heading size="6" mt="-1">
            Financial performance
          </Heading>
        </Box>

        <Flex gap="1" position="absolute" top="0" right="0" m="2">
          <IconButton variant="ghost-mono">
            <OpenInNewWindowIcon width="20" height="20" />
          </IconButton>
          <IconButton variant="ghost-mono">
            <DrawingPinIcon width="20" height="20" />
          </IconButton>
        </Flex>

        <Text size="2" mb="6" color="gray">
          Review your company’s KPIs compared to the month before.
        </Text>

        <Grid columns="3" gap="5">
          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                MRR
              </Text>
              <Badge color="teal">
                <ArrowUpIcon width="12" height="12" />
                3.2%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $350K
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                OpEx
              </Text>
              <Badge color="red">
                <ArrowUpIcon width="12" height="12" />
                12.8%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $211K
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                CapEx
              </Text>
              <Badge color="teal">
                <ArrowDownIcon width="12" height="12" />
                8.8%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $94K
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                GPM
              </Text>
              <Badge color="red">
                <ArrowDownIcon width="12" height="12" />
                1.2%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              44.6%
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                NPM
              </Text>
              <Badge color="gray" variant="outline">
                0.0%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              9.1%
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                EBITDA
              </Text>
              <Badge color="teal">
                <ArrowUpIcon width="12" height="12" />
                4.1%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $443K
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                CAC
              </Text>
              <Badge color="teal">
                <ArrowDownIcon width="12" height="12" />
                11.0%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $146
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                LTV
              </Text>
              <Badge color="teal">
                <ArrowUpIcon width="12" height="12" />
                3%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $1,849
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                Churn
              </Text>
              <Badge color="red">
                <ArrowUpIcon width="12" height="12" />
                1.1%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              12.4%
            </Text>
          </Box>
        </Grid>
      </Card>
    </Flex>
  </Flex>
);

function getRandomIndices(n: number, max: number) {
  // Create an empty array to hold the random numbers
  const arr = [];

  // Keep generating random numbers until we have 5 unique ones
  while (arr.length < n) {
    // Generate a random integer between 1 and 30
    const randInt = Math.floor(Math.random() * max);
    // If the number isn't already in the array, add it
    if (!arr.includes(randInt)) {
      arr.push(randInt);
    }
  }

  return arr;
}

const Marker = (props: React.ComponentPropsWithoutRef<typeof Flex>) => (
  <Flex
    align="center"
    justify="center"
    width="4"
    height="4"
    {...props}
    style={{
      color: 'var(--teal11)',
      backgroundColor: 'var(--teal4)',
      borderRadius: '100%',
      ...props.style,
    }}
  />
);
