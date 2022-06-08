import React from "react"; 
import { Avatar, Row, Col, Text, Button, Spacer, Grid } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useSession }  from "next-auth/react"

export const UserTwitterCard = ({
  avatarUrl,
  avatarProps,
  css,
  onClick,
  ...props
}) => {
  const [following, setFollowing] = React.useState(false);
  const {data:session } = useSession()
  

  return (
    <Grid.Container
      className="user-twitter-card__container"
      css={{
        mw: "250px",
        borderRadius: "$lg",
        padding: "$sm",
        ...css,
      }}
      onClick={onClick}
      {...props}
    >
      <Row justify="space-between" align="center">
        <Col span={3}>
          <Avatar
            size="lg"
            src={session?.user?.image}
            color="gradient"
            bordered
            squared
            {...avatarProps}
          />
        </Col>
        <Col span={9}>
          <Row>
            <Grid xs={12} direction="column">
              <Text className="user-twitter-card__text" b size={15}>
                Anurag Sharma
              </Text>
              <Text
                className="user-twitter-card__text"
                size={14}
                css={{ mt: "-$3" }}
                color="#888888"
              >
                @crossrehk
              </Text>
            </Grid>
            <Button
              auto
              rounded
              onClick={signOut}
              css={{
                maxHeight: "$space$12",
                fs: "$xs",
                fontWeight: "$semibold",
                // borderColor: following ? "$foreground" : "$primary",
                // color: following ? "$foreground" : "$danger",
              }}
              color="error"
              // bordered={following}
            >
              Sign Out
            </Button>
          </Row>
        </Col>
      </Row>
      <Grid.Container className="user-twitter-card__username-container">
        <Grid xs={12}>
          <Text
            className="user-twitter-card__text"
            size={14}
            css={{ mt: "$1" }}
            color="#888888"
          >
            Full-stack developer, @sharma ji 🎉
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container
        className="user-twitter-card__metrics-container"
        justify="flex-start"
        alignContent="center"
      >
        <Text className="user-twitter-card__text" size={14} color="#888888">
          <Text
            b
            color="foreground"
            className="user-twitter-card__text"
            size={14}
            css={{ mr: "$1" }}
          >
            5
          </Text>
          Following
        </Text>
        <Spacer inline x={0.5} />
        <Text className="user-twitter-card__text" size={14} color="#888888">
          <Text
            b
            color="foreground"
            className="user-twitter-card__text"
            size={14}
            css={{ mr: "$1" }}
          >
            97.1K
          </Text>
          Followers
        </Text>
      </Grid.Container>
    </Grid.Container>
  );
};