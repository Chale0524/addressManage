<template>
  <div class="home-container">
    <div class="container-header">
      <h4 class="title" v-show="configData.title">{{ configData.title }}</h4>
      <el-alert title="公告：" :description="configData.notice ? configData.notice : ''" type="warning" show-icon :closable="false" v-show="configData.notice" />
    </div>
    <div class="container-body">
      <el-form ref="ruleFormRef" status-icon class="demo-ruleForm" label-position="top" size="large">
        <el-form-item :label="configData.label1">
          <el-link type="danger" :href="configData.url1" target="_blank">点击即可进入</el-link>
        </el-form-item>
        <el-form-item :label="configData.label2">
          <el-link type="danger" :href="configData.url2" target="_blank">点击即可进入</el-link>
        </el-form-item>
        <el-form-item :label="configData.label3">
          <el-link type="danger" :href="configData.url3" target="_blank">点击即可进入</el-link>
        </el-form-item>
        <el-form-item :label="configData.label4">
          <el-link type="danger" :href="configData.url4" target="_blank">点击即可进入</el-link>
        </el-form-item>
        <el-form-item :label="configData.label5">
          <el-link type="danger" :href="configData.url5" target="_blank">点击即可进入</el-link>
        </el-form-item>
        <el-form-item :label="configData.label6">
          <el-link type="danger" :href="configData.url6" target="_blank">点击即可进入</el-link>
        </el-form-item>
        <el-form-item :label="configData.label7">
          <el-link type="danger" :href="configData.url7" target="_blank">点击即可进入</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getAddressConfig } from '@/api'
import { formConfig } from '@/utils/config'
export default {
  name: 'home',
  components: {},
  props: {},
  data() {
    return {
      configData: formConfig,
    }
  },
  watch: {},
  computed: {},
  created() {},
  activated() {
    this.getConfig()
  },
  mounted() {},
  methods: {
    async getConfig() {
      this.configData = await getAddressConfig()
    },
  },
}
</script>
<style lang="scss" scoped>
.home-container {
  width: 375px;
  margin: 0 auto;

  .container-header {
    color: #fff;
    margin-bottom: 30px;
    .title {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-bottom: 15px;
      text-align: center;
      font-size: 32px;
    }
  }
  .container-body {
    padding: 1.5em;
    border-radius: 5px;
    background: #fff;

    .form-submit {
      .el-form-item__content {
        justify-content: center;
        .el-button {
          width: 100%;
        }
      }
    }
  }
}

.home-container {
  @media (max-width: 1366px) {
    width: 31%;
  }
  @media (max-width: 1280px) {
    width: 32%;
  }
  @media (max-width: 1080px) {
    width: 38%;
  }
  @media (max-width: 800px) {
    width: 46%;
  }
  @media (max-width: 736px) {
    width: 53%;
  }
  @media (max-width: 667px) {
    width: 57%;
  }
  @media (max-width: 600px) {
    width: 62%;
  }
  @media (max-width: 568px) {
    width: 68%;
  }
  @media (max-width: 480px) {
    width: 78%;
  }
  @media (max-width: 414px) {
    width: 85%;
  }
}
</style>
