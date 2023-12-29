<template>
  <div class="manage-container">
    <el-form ref="ruleFormRef" :model="formData" status-icon class="manage-form" label-position="top">
      <div class="container-header">
        <el-form-item label="" prop="title">
          <el-input v-model="formData.title" placeholder="请输入标题" />
        </el-form-item>
      </div>
      <div class="container-body">
        <el-form-item label="公告" prop="notice">
          <el-input type="textarea" v-model="formData.notice" placeholder="请输入公告内容" />
        </el-form-item>
        <el-form-item label="备用地址1">
          <el-input v-model="formData.label1" placeholder="请输入备用地址标题">
            <template #prepend>标题</template>
          </el-input>
          <el-input v-model="formData.url1" placeholder="请输入备用地址1">
            <template #prepend>链接</template>
          </el-input>
        </el-form-item>
        <el-form-item label="备用地址2">
          <el-input v-model="formData.label2" placeholder="请输入备用地址标题">
            <template #prepend>标题</template>
          </el-input>
          <el-input v-model="formData.url2" placeholder="请输入备用地址2">
            <template #prepend>链接</template>
          </el-input>
        </el-form-item>
        <el-form-item label="备用地址3">
          <el-input v-model="formData.label3" placeholder="请输入备用地址标题">
            <template #prepend>标题</template>
          </el-input>
          <el-input v-model="formData.url3" placeholder="请输入备用地址3">
            <template #prepend>链接</template>
          </el-input>
        </el-form-item>
        <el-form-item label="备用地址4">
          <el-input v-model="formData.label4" placeholder="请输入备用地址标题">
            <template #prepend>标题</template>
          </el-input>
          <el-input v-model="formData.url4" placeholder="请输入备用地址4">
            <template #prepend>链接</template>
          </el-input>
        </el-form-item>
        <el-form-item label="备用地址5">
          <el-input v-model="formData.label5" placeholder="请输入备用地址标题">
            <template #prepend>标题</template>
          </el-input>
          <el-input v-model="formData.url5" placeholder="请输入备用地址5">
            <template #prepend>链接</template>
          </el-input>
        </el-form-item>
        <el-form-item label="备用地址6">
          <el-input v-model="formData.label6" placeholder="请输入备用地址标题">
            <template #prepend>标题</template>
          </el-input>
          <el-input v-model="formData.url6" placeholder="请输入备用地址6">
            <template #prepend>链接</template>
          </el-input>
        </el-form-item>
        <el-form-item label="本站APP下载地址">
          <el-input v-model="formData.label7" placeholder="请输入备用地址标题">
            <template #prepend>标题</template>
          </el-input>
          <el-input v-model="formData.url7" placeholder="请输入备用地址7">
            <template #prepend>链接</template>
          </el-input>
        </el-form-item>
        <el-form-item class="form-submit">
          <el-button type="primary" @click="onSaveForm">确认保存</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import { saveAddressConfig, getAddressConfig } from '@/api'
import { formConfig } from '@/utils/config'
import { isObject } from '@/utils/is'
export default {
  name: 'manage',
  components: {},
  props: {},
  data() {
    return {
      formData: formConfig,
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
      const res = await getAddressConfig()
      if (isObject(res)) {
        this.formData = res
      } else {
        this.formData = formConfig
      }
    },

    async onSaveForm() {
      const _formData = this.formData
      const formData = new FormData() //FormData对象，添加参数只能通过append('key', value)的形式添加
      formData.append('title', _formData.title)
      formData.append('notice', _formData.notice)
      formData.append('label1', _formData.label1)
      formData.append('url1', _formData.url1)
      formData.append('label2', _formData.label2)
      formData.append('url2', _formData.url2)
      formData.append('label3', _formData.label3)
      formData.append('url3', _formData.url3)
      formData.append('label4', _formData.label4)
      formData.append('url4', _formData.url4)
      formData.append('label5', _formData.label5)
      formData.append('url5', _formData.url5)
      formData.append('label6', _formData.label6)
      formData.append('url6', _formData.url6)
      formData.append('label7', _formData.label7)
      formData.append('url7', _formData.url7)

      const res = await saveAddressConfig(formData)
      console.log(res)
      if (res === 'success') {
        this.$message.success('保存成功！')
        this.$router.push('/home/index')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.manage-container {
  width: 28%;
  margin: 0 auto;
  .container-header {
    font-size: 36px;
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
    text-transform: uppercase;
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
  .manage-form {
    .el-form-item__content {
      .el-input + .el-input {
        margin-top: 10px;
      }
    }
  }
}

.manage-container {
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
