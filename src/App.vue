<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
  <WideBanner />
  <PlanBanner />
  <TheFooter />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import WideBanner from '~/components/WideBanner'
import Billboard from '~/components/Billboard'
import PlanBanner from '~/components/PlanBanner'

export default {
  components: {
    LNB, // 지역등록
    RNB,
    TheHeader,
    Billboard,
    WideBanner,
    PlanBanner,
    TheFooter,
  }
}
</script>

<style lang="scss">
@import "~/scss/main"
</style>
