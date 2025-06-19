"use client"

import { mainnet, polygon } from "@particle-network/authkit/chains"
import { AuthType } from "@particle-network/auth-core"
import {
  AuthCoreContextProvider,
  PromptSettingType,
} from "@particle-network/authkit"

export const ParticleAuthkit = ({ children }: React.PropsWithChildren) => {
  
  return (
    <AuthCoreContextProvider
      options={{
        projectId: process.env.NEXT_PUBLIC_PARTICLE_NETWORK_PROJECT_ID!,
        clientKey: process.env.NEXT_PUBLIC_PARTICLE_NETWORK_CLIENT_KEY!,
        appId: process.env.NEXT_PUBLIC_PARTICLE_NETWORK_APP_ID!,
        authTypes: [AuthType.email, AuthType.google],
        themeType: "dark",
        chains: [mainnet, polygon],
        promptSettingConfig: {
          promptPaymentPasswordSettingWhenSign: PromptSettingType.first,
          promptMasterPasswordSettingWhenLogin: PromptSettingType.first,
        },
        wallet: {
          themeType: "dark",
          visible: true,
          customStyle: {
            supportUIModeSwitch: true,
            supportLanguageSwitch: false,
          },
        },
      }}
    >
      {children}
    </AuthCoreContextProvider>
  )
}
