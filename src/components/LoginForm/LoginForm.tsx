"use client";

import { Card } from "@/design-system/components/containers/Card/Card";
import styles from "./LoginForm.module.scss";
import { Flex } from "@/design-system/components/containers/Flex/Flex";
import { Button, TextField } from "@mui/material";
import { login } from "@/data/login/login";

export const LoginForm: React.FC = () => {
  return (
    <Card className={styles.loginFormContainer} pt="l" pb="l" pr="l" pl="l">
      <form action={login}>
        <Flex direction="column" gap="s">
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            required
          />
          <Button type="submit">Log in</Button>
        </Flex>
      </form>
    </Card>
  );
};
